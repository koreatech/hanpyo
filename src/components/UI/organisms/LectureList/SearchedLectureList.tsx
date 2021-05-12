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
  const selectedDepartment = useReactiveVar(lectureInfoStore.state.selectedDepartment);
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

  const filteredLectures = data.lectureInfos.filter((lecture: LectureInfos) => lecture.department === selectedDepartment);

  const onLectureSearchDoubleClickListener = (lectureInfos: LectureInfos) => {
    if (isString(lectureInfos.lectureTimes)) return;

    timeTableStore.addLectureToTable(lectureInfos);
    snackbarStore.setSnackbarType(SnackbarType.ADD_SUCCESS);
    snackbarStore.setSnackbarState(true);
  };

  return (
    <LectureListContent onClick={onLectureSearchClickListener} onDoubleClick={onLectureSearchDoubleClickListener} lectureInfos={filteredLectures} />
  );
};

export { SearchedLectureList };
