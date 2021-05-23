import React from 'react';
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
    snackbarStore.showTabDeleteMsg();
  };

  const onBasketLectureClickListener = (lectureInfos: LectureInfos) => {
    if (isString(lectureInfos.lectureTimes)) return;

    lectureInfoStore.setBasketSelectedLecture(lectureInfos);
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
