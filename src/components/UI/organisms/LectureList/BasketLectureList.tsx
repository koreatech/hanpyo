import React from 'react';
import { SnackbarType } from '@/components/UI/atoms';
import { LectureInfos, LectureListContent } from '@/components/UI/molecules';
import { useStores } from '@/stores';
import { isString } from '@/common/utils/typeCheck';
import { useReactiveVar } from '@apollo/client';

const BasketLectureList = () => {
  const { timeTableStore, snackbarStore, lectureInfoStore } = useStores();

  const savedLectures = useReactiveVar(timeTableStore.state.selectedTabLectures);
  const selectedTabIdx = useReactiveVar(timeTableStore.state.selectedTabIdx);
  const savedLecturesInSelectedTab = savedLectures[selectedTabIdx - 1];

  const onBasketLectureDoubleClickListener = (lectureInfos: LectureInfos) => {
    if (isString(lectureInfos.lectureTimes)) return;

    timeTableStore.removeLectureFromTable(lectureInfos.name);
    snackbarStore.setSnackbarType(SnackbarType.DELETE_SUCCESS);
    snackbarStore.setSnackbarState(true);
  };

  const onBasketLectureClickListener = (lectureInfos: LectureInfos) => {
    if (isString(lectureInfos.lectureTimes)) return;

    lectureInfoStore.state.basketSelectedLecture(lectureInfos);
  };
  return (
    <LectureListContent
      isBasket
      onClick={onBasketLectureClickListener}
      onDoubleClick={onBasketLectureDoubleClickListener}
      lectureInfos={savedLecturesInSelectedTab}
    />
  );
};

export { BasketLectureList };