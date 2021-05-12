import { makeVar, ReactiveVar } from '@apollo/client';
import { RootStore } from '@/stores';
import { LectureInfos } from '@/components/UI/molecules';

interface LectureInfoStoreState {
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
    };
  }

  getSameLectures(): LectureInfos[] {
    const { lectures, selectedLecture } = this.state;
    if (selectedLecture() === null) return [];
    return lectures().filter((lecture) => lecture.code === selectedLecture()?.code);
  }
}

export default LectureInfoStore;
