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
  const { selectedDepartment, selectedDay, selectedCredit } = lectureInfoStore.state;
  const department = useReactiveVar(selectedDepartment);
  const day = useReactiveVar(selectedDay);
  const credit = useReactiveVar(selectedCredit);
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
  const getFilteredLectures = () => {
    if (!department && !credit) return [];
    let filteredLectures = data.lectureInfos;
    if (department) filteredLectures = filteredLectures.filter((lecture: LectureInfos) => lecture.department === department);
    if (credit) filteredLectures = filteredLectures.filter((lecture: LectureInfos) => lecture.credit === Number(credit[0]));

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
