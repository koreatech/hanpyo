import React from 'react';
import { SnackbarType } from '@/components/UI/atoms';
import { LectureInfos } from '@/components/UI/molecules';
import { LectureList } from '@/components/UI/organisms';
import { useStores } from '@/stores';

const BasketLectureListContainer = (): JSX.Element => {
  const { timeTableStore, snackbarStore } = useStores();
  const onBasketLectureClickListener = (lectureInfos: LectureInfos) => {
    if (typeof lectureInfos.time === 'string') return;
    timeTableStore.removeLectureFromTable(lectureInfos.name);
    snackbarStore.setSnackbarType(SnackbarType.DELETE_SUCCESS);
    snackbarStore.setSnackbarState(true);
  };
  return (
    <>
      <LectureList isBasketList onClick={onBasketLectureClickListener} />
    </>
  );
};

export { BasketLectureListContainer };
