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

  const getTimeBoundByDay = (day: string) => {
    if (day === '월') return { start: 0, end: 1440 };
    if (day === '화') return { start: 1440, end: 2880 };
    if (day === '수') return { start: 2880, end: 4320 };
    if (day === '목') return { start: 4320, end: 5760 };
    if (day === '금') return { start: 5760, end: 7200 };
    if (day === '토') return { start: 7200, end: 8640 };
    return { start: 0, end: 8640 };
  };
  const getFilteredLectures = () => {
    if (!department && !credit && !day && !startTime && !endTime) return null;
    let filteredLectures = data.lectureInfos;
    if (department) filteredLectures = filteredLectures.filter((lecture: LectureInfos) => lecture.department === department);
    if (credit) filteredLectures = filteredLectures.filter((lecture: LectureInfos) => lecture.credit === Number(credit[0]));
    if (day)
      filteredLectures = filteredLectures.filter((lecture: LectureInfos) => {
        if (typeof lecture.lectureTimes === 'string') return false;
        if (lecture.lectureTimes) {
          return lecture.lectureTimes.some(
            (lectureTime) => lectureTime.start >= getTimeBoundByDay(day).start && lectureTime.end < getTimeBoundByDay(day).end,
          );
        }
        return false;
      });
    if (startTime && endTime) {
      filteredLectures = filteredLectures.filter((lecture: LectureInfos) => {
        if (typeof lecture.lectureTimes === 'string') return false;
        if (lecture.lectureTimes) {
          return lecture.lectureTimes.some((lectureTime) => lectureTime.start % 1440 >= startTime && lectureTime.end % 1440 <= endTime);
        }
        return false;
      });
    }
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
