import { makeVar, ReactiveVar } from '@apollo/client';
import { RootStore } from '@/stores';
import { LectureInfos } from '@/components/UI/molecules';

interface LectureInfoStoreState {
  lectures: ReactiveVar<LectureInfos[]>;
  selectedLecture: ReactiveVar<LectureInfos | null>;
  basketSelectedLecture: ReactiveVar<LectureInfos | null>;
}

class LectureInfoStore {
  rootStore: RootStore;

  state: LectureInfoStoreState;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.state = {
      lectures: makeVar<LectureInfos[]>(testData),
      selectedLecture: makeVar<LectureInfos | null>(null),
      basketSelectedLecture: makeVar<LectureInfos | null>(null),
    };
  }

  getSameLectures(): LectureInfos[] {
    const { lectures, selectedLecture } = this.state;
    if (selectedLecture() === null) return [];
    return lectures().filter((lecture) => lecture.code === selectedLecture()?.code);
  }
}

const testData = [
  {
    code: '111111',
    name: '리눅스의 기초',
    class: '01',
    prof: '도눅스',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: [
      { start: 3690, end: 3720 },
      { start: 540, end: 600 },
    ],
  },
  {
    code: '111112',
    name: '신과함께',
    class: '01',
    prof: '갓우진',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: [{ start: 2340, end: 2460 }],
  },
  {
    code: '222222',
    name: '백엔드 심화과정',
    class: '01',
    prof: '백마',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: [{ start: 5100, end: 5160 }],
  },
  {
    code: '333333',
    name: '허접한 진혀쿠',
    class: '01',
    prof: '지녀쿠',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: [{ start: 5400, end: 5520 }],
  },
  {
    code: '444444',
    name: '디자인커뮤니케이션',
    class: '01',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: [{ start: 3660, end: 3780 }],
  },
  {
    code: '555555',
    name: '디자인커뮤니케이션',
    class: '01',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: [{ start: 3660, end: 3780 }],
  },
  {
    code: '666666',
    name: '디자인커뮤니케이션',
    class: '01',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: [{ start: 3660, end: 3780 }],
  },
  {
    code: '777777',
    name: '디자인',
    class: '01',
    prof: '정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: [{ start: 3660, end: 3780 }],
  },
  {
    code: 'HANPYs',
    name: '디자인커뮤니케이션',
    class: '01',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: [{ start: 3660, end: 3780 }],
  },
  {
    code: 'HANPYa',
    name: '디자인커뮤니케이션',
    class: '01',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: [{ start: 3660, end: 3780 }],
  },
  {
    code: 'HANPYb',
    name: '디자인커뮤니케이션',
    class: '01',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: [{ start: 3660, end: 3780 }],
  },
  {
    code: 'HANPYc',
    name: '디자인커뮤니케이션',
    class: '01',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: [{ start: 3660, end: 3780 }],
  },
  {
    code: 'hanpyo',
    name: '디자인커뮤니케이션',
    class: '01',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: [{ start: 3660, end: 3780 }],
  },
  {
    code: 'hanpyo',
    name: '디자인커뮤니케이션',
    class: '02',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: [
      { start: 540, end: 600 },
      { start: 5220, end: 5340 },
    ],
  },
  {
    code: 'hanpyo',
    name: '디자인커뮤니케이션',
    class: '03',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: [{ start: 1980, end: 2040 }],
  },
  {
    code: 'HANPYg',
    name: '디자인커뮤니케이션',
    class: '01',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: [{ start: 3660, end: 3780 }],
  },
  {
    code: 'HANPYh',
    name: '디자인커뮤니케이션',
    class: '01',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: [{ start: 3660, end: 3780 }],
  },
  {
    code: 'HANPYi',
    name: '디자인커뮤니케이션',
    class: '01',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: [{ start: 3660, end: 3780 }],
  },
  {
    code: 'HANPYO',
    name: '디자인커뮤니케이션',
    class: '01',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: [{ start: 3660, end: 3780 }],
  },
];

export default LectureInfoStore;
