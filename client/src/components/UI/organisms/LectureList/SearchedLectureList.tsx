/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-shadow */
import React from 'react';
import { SnackbarType } from '@/components/UI/atoms';
import { LectureInfos, LectureListContent } from '@/components/UI/molecules';
import { useStores } from '@/stores';
import { isString } from '@/common/utils/typeCheck';
import { useQuery, useReactiveVar } from '@apollo/client';
import { LectureListSkeleton } from '@/components/Skeleton';
import { LECTURE_INFOS } from '@/queries';
import { getTimeBoundByDay } from '@/common/utils';

const SearchedLectureList = () => {
  const { timeTableStore, snackbarStore, lectureInfoStore } = useStores();
  const { selectedDepartment, selectedDay, selectedCredit, selectedStartTime, selectedEndTime } = lectureInfoStore.state;
  const department = useReactiveVar(selectedDepartment);
  const day = useReactiveVar(selectedDay);
  const credit = useReactiveVar(selectedCredit);
  const startTime = useReactiveVar(selectedStartTime);
  const endTime = useReactiveVar(selectedEndTime);
  const onLectureSearchClickListener = (lectureInfos: LectureInfos) => {
    if (isString(lectureInfos.lectureTimes)) return;

    lectureInfoStore.state.selectedLecture(lectureInfos);
  };

  const { loading, error, data } = useQuery(LECTURE_INFOS);

  if (loading) {
    return (
      <div>
        <LectureListSkeleton />
      </div>
    );
  }

  if (error) return <p>Error :(</p>;

  const getFilteredByDepartmentLectures = (lectures: LectureInfos[]) => {
    if (department) return lectures.filter((lecture: LectureInfos) => lecture.department === department);
    return lectures;
  };
  const getFilteredByCreditLectures = (lectures: LectureInfos[]) => {
    if (credit) return lectures.filter((lecture: LectureInfos) => lecture.credit === Number(credit[0]));
    return lectures;
  };
  const getFilteredByDayLectures = (lectures: LectureInfos[]) => {
    if (day)
      return lectures.filter((lecture: LectureInfos) => {
        if (typeof lecture.lectureTimes === 'string') return false;
        if (lecture.lectureTimes) {
          return lecture.lectureTimes.some(
            (lectureTime) => lectureTime.start >= getTimeBoundByDay(day).start && lectureTime.end < getTimeBoundByDay(day).end,
          );
        }
        return false;
      });
    return lectures;
  };
  const getFilteredByTimeLectures = (lectures: LectureInfos[]) => {
    if (startTime && endTime) {
      return lectures.filter((lecture: LectureInfos) => {
        if (typeof lecture.lectureTimes === 'string') return false;
        if (lecture.lectureTimes) {
          return lecture.lectureTimes.some((lectureTime) => lectureTime.start % 1440 >= startTime && lectureTime.end % 1440 <= endTime);
        }
        return false;
      });
    }
    return lectures;
  };
  const getFilteredLectures = () => {
    if (!department && !credit && !day && !startTime && !endTime) return null;
    let filteredLectures = data.lectureInfos;
    filteredLectures = getFilteredByDepartmentLectures(filteredLectures);
    filteredLectures = getFilteredByCreditLectures(filteredLectures);
    filteredLectures = getFilteredByDayLectures(filteredLectures);
    filteredLectures = getFilteredByTimeLectures(filteredLectures);
    return filteredLectures;
  };

  const onLectureSearchDoubleClickListener = (lectureInfos: LectureInfos) => {
    if (isString(lectureInfos.lectureTimes)) return;

    timeTableStore.addLectureToTable(lectureInfos);
    snackbarStore.setSnackbarType(SnackbarType.ADD_SUCCESS);
    snackbarStore.setSnackbarState(true);
  };

  return (
    <LectureListContent
      onClick={onLectureSearchClickListener}
      onDoubleClick={onLectureSearchDoubleClickListener}
      lectureInfos={getFilteredLectures()}
    />
  );
};

export { SearchedLectureList };
