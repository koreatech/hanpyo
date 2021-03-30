import React from 'react';
import { SnackbarType } from '@/components/UI/atoms';
import { LectureInfos } from '@/components/UI/molecules';
import { LectureList } from '@/components/UI/organisms';
import { useStores } from '@/stores';

const SearchedLectureListContainer = (): JSX.Element => {
  const { timeTableStore, snackbarStore } = useStores();
  const onLectureSearchClickListener = (lectureInfos: LectureInfos) => {
    if (typeof lectureInfos.time === 'string') return;
    timeTableStore.addLectureToTable(lectureInfos);
    snackbarStore.setSnackbarType(SnackbarType.ADD_SUCCESS);
    snackbarStore.setSnackbarState(true);
  };

  return (
    <>
      <LectureList onClick={onLectureSearchClickListener} />
    </>
  );
};

export { SearchedLectureListContainer };
