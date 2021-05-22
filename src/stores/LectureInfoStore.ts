import { makeVar, ReactiveVar } from '@apollo/client';
import { RootStore } from '@/stores';
import { LectureInfos } from '@/components/UI/molecules';

interface LectureFilterState {
  selectedDepartment: ReactiveVar<string | null>;
  selectedDay: ReactiveVar<string | null>;
  selectedCredit: ReactiveVar<string | null>;
  selectedStartTime: ReactiveVar<number | null>;
  selectedEndTime: ReactiveVar<number | null>;
  searchWord: ReactiveVar<string | null>;
}

interface LectureInfoStoreState extends LectureFilterState {
  lectures: ReactiveVar<LectureInfos[]>;
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
      lectures: makeVar<LectureInfos[]>([]),
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

  getSameLectures(): LectureInfos[] {
    const { lectures, selectedLecture } = this.state;

    if (selectedLecture() === null) return [];

    return lectures().filter((lecture) => lecture.code === selectedLecture()?.code);
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

  setSelectedLecture(newLectureInfos: LectureInfos): void {
    const { selectedLecture } = this.state;

    selectedLecture(newLectureInfos);
  }
}

export default LectureInfoStore;
