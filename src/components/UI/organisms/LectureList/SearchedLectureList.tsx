/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-shadow */
import React from 'react';
import { LectureInfos, LectureListContent } from '@/components/UI/molecules';
import { useStores } from '@/stores';
import { isString } from '@/common/utils/typeCheck';
import { useQuery } from '@apollo/client';
import { LectureListSkeleton } from '@/components/Skeleton';
import { LECTURE_INFOS } from '@/queries';
import { getTimeBoundByDay } from '@/common/utils';
import { useReactiveVars } from '@/common/hooks';

interface LectureFilterState {
  selectedDepartment: string | null;
  selectedDay: string | null;
  selectedCredit: string | null;
  selectedStartTime: number | null;
  selectedEndTime: number | null;
  searchWord: string | null;
}

const SearchedLectureList = (): JSX.Element => {
  const { timeTableStore, snackbarStore, lectureInfoStore } = useStores();
  const { selectedDepartment, selectedDay, selectedCredit, selectedStartTime, selectedEndTime, searchWord } = useReactiveVars<LectureFilterState>(
    lectureInfoStore.getFilterState(),
  );
  const { loading, error, data } = useQuery(LECTURE_INFOS);

  if (loading) {
    return (
      <div>
        <LectureListSkeleton />
      </div>
    );
  }

  if (error) return <p>Error :(</p>;

  const onLectureSearchClickListener = (lectureInfos: LectureInfos) => {
    if (isString(lectureInfos.lectureTimes)) return;

    lectureInfoStore.setSelectedLecture(lectureInfos);
  };

  const filterBySearchWord = (lecturesInfos: LectureInfos[]) => {
    const parseSearchWord = (searchWord: string): string[] => searchWord.replaceAll(' ', '').split(',');
    const checkSearchWordInName = (parsedSearchWords: string[], name: string): boolean => {
      if (!name) return false;
      return parsedSearchWords.some((parsedSearchWord) => name.includes(parsedSearchWord));
    };

    if (searchWord) {
      const parsedSearchWords = parseSearchWord(searchWord);

      return lecturesInfos.filter((lectureInfo: LectureInfos) => {
        const { name } = lectureInfo;
        return checkSearchWordInName(parsedSearchWords, name);
      });
    }

    return lecturesInfos;
  };

  const filterByDepartment = (lecturesInfos: LectureInfos[]): LectureInfos[] => {
    if (selectedDepartment && selectedDepartment !== '전체')
      return lecturesInfos.filter((lectureInfo: LectureInfos) => lectureInfo.department === selectedDepartment);
    return lecturesInfos;
  };

  const filterByCredit = (lecturesInfos: LectureInfos[]): LectureInfos[] => {
    if (selectedCredit && selectedCredit !== '전체')
      return lecturesInfos.filter((lecturesInfo: LectureInfos) => lecturesInfo.credit === Number(selectedCredit[0]));
    return lecturesInfos;
  };

  const filterByDay = (lecturesInfos: LectureInfos[]): LectureInfos[] => {
    if (selectedDay && selectedDay !== '전체') {
      return lecturesInfos.filter((lectureInfo: LectureInfos) => {
        const { lectureTimes } = lectureInfo;

        if (isString(lectureTimes) || !lectureTimes) return false;

        return lectureTimes.some(
          (lectureTime) => lectureTime.start >= getTimeBoundByDay(selectedDay).start && lectureTime.end < getTimeBoundByDay(selectedDay).end,
        );
      });
    }

    return lecturesInfos;
  };

  const filterByTime = (lecturesInfos: LectureInfos[]): LectureInfos[] => {
    if (selectedStartTime && selectedEndTime) {
      return lecturesInfos.filter((lectureInfo: LectureInfos) => {
        const { lectureTimes } = lectureInfo;

        if (isString(lectureTimes) || !lectureTimes) return false;

        return lectureTimes.some((lectureTime) => lectureTime.start % 1440 >= selectedStartTime && lectureTime.end % 1440 <= selectedEndTime);
      });
    }

    return lecturesInfos;
  };

  const getFilteredLectures = () => {
    if (!selectedDepartment && !selectedCredit && !selectedDay && !selectedStartTime && !selectedEndTime && !searchWord) return null;

    let filteredLectures = data.lectureInfos;

    filteredLectures = filterBySearchWord(filteredLectures);
    filteredLectures = filterByDepartment(filteredLectures);
    filteredLectures = filterByCredit(filteredLectures);
    filteredLectures = filterByDay(filteredLectures);
    filteredLectures = filterByTime(filteredLectures);

    return filteredLectures;
  };

  const onLectureSearchDoubleClickListener = (lectureInfos: LectureInfos) => {
    if (isString(lectureInfos.lectureTimes)) return;

    timeTableStore.addLectureToTable(lectureInfos);
    snackbarStore.showTabAddMsg(); // 이 부분은 리팩토링하면서 수정한 부분입니다! 적절하게 메소드를 변경해주세요!

    snackbarStore.setSnackbarType(timeTableStore.addLectureToTable(lectureInfos));
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
