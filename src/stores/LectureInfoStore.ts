import { makeVar, ReactiveVar } from '@apollo/client';
import { RootStore } from '@/stores';
import { LectureInfos } from '@/components/UI/molecules';
import { isString, isNumber } from '@/common/utils/typeCheck';

enum LectureFilterType {
  DEPARTMENT = 'department',
  DAY = 'day',
  CREDIT = 'credit',
  START_TIME = 'startTime',
  END_TIME = 'endTime',
}

interface LectureFilterState {
  selectedDepartment: ReactiveVar<string | null>;
  selectedDay: ReactiveVar<string | null>;
  selectedCredit: ReactiveVar<string | null>;
  selectedStartTime: ReactiveVar<number | null>;
  selectedEndTime: ReactiveVar<number | null>;
  searchWord: ReactiveVar<string | null>;
}

interface LectureInfoStoreState extends LectureFilterState {
  selectedLecture: ReactiveVar<LectureInfos | null>;
  basketSelectedLecture: ReactiveVar<LectureInfos | null>;
  filteredLectures: ReactiveVar<LectureInfos[] | null>;
}

class LectureInfoStore {
  rootStore: RootStore;

  state: LectureInfoStoreState;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.state = {
      selectedLecture: makeVar<LectureInfos | null>(null),
      basketSelectedLecture: makeVar<LectureInfos | null>(null),
      filteredLectures: makeVar<LectureInfos[] | null>(null),
      selectedDepartment: makeVar<string | null>(null),
      selectedDay: makeVar<string | null>(null),
      selectedCredit: makeVar<string | null>(null),
      selectedStartTime: makeVar<number | null>(null),
      selectedEndTime: makeVar<number | null>(null),
      searchWord: makeVar<string | null>(null),
    };
  }

  getSameLectures(lectures: LectureInfos[]): LectureInfos[] {
    const { selectedLecture } = this.state;

    if (selectedLecture() === null) return [];

    return lectures.filter((lecture) => lecture.code === selectedLecture()?.code);
  }

  getFilterState(): LectureFilterState {
    const { selectedDepartment, selectedDay, selectedCredit, selectedStartTime, selectedEndTime, searchWord } = this.state;
    return { selectedDepartment, selectedDay, selectedCredit, selectedStartTime, selectedEndTime, searchWord };
  }

  setSearchWord(newSearchWord: string): void {
    const { searchWord } = this.state;

    if (newSearchWord === searchWord()) return;

    searchWord(newSearchWord);
  }

  setSelectedLecture(newLectureInfos: LectureInfos | null): void {
    const { selectedLecture } = this.state;

    selectedLecture(newLectureInfos);
  }

  setBasketSelectedLecture(newBasketSelectedLecture: LectureInfos | null): void {
    const { basketSelectedLecture } = this.state;

    basketSelectedLecture(newBasketSelectedLecture);
  }

  changeFilterState(type: string, value: string | number): void {
    const { selectedDepartment, selectedDay, selectedCredit, selectedStartTime, selectedEndTime } = this.state;

    if (isString(value) && type === LectureFilterType.DEPARTMENT) {
      selectedDepartment(value);
    }

    if (isString(value) && type === LectureFilterType.DAY) {
      selectedDay(value);
    }

    if (isString(value) && type === LectureFilterType.CREDIT) {
      selectedCredit(value);
    }

    if (isNumber(value) && type === LectureFilterType.START_TIME) {
      let time = value;
      if (time === 720) time = 0;
      if (time === 1440) time = 720;
      selectedStartTime(time);
    }

    if (isNumber(value) && type === LectureFilterType.END_TIME) {
      let time = value;
      if (time === 720) time = 0;
      if (time === 1440) time = 720;
      selectedEndTime(time);
    }
  }

  resetFilterState(): void {
    const { selectedDepartment, selectedDay, selectedCredit, selectedStartTime, selectedEndTime, searchWord } = this.state;

    searchWord(null);
    selectedDepartment(null);
    selectedDay(null);
    selectedCredit(null);
    selectedStartTime(null);
    selectedEndTime(null);
  }
}

export { LectureInfoStore, LectureFilterType };
