import { makeVar, ReactiveVar } from '@apollo/client';
import { RootStore } from '@/stores';
import { LectureInfos } from '@/components/UI/molecules';

interface TableInfo {
  name: string;
  index: number;
}

interface TimeTableStoreState {
  selectedTabIdx: ReactiveVar<any>;
  tables: ReactiveVar<TableInfo[]>;
  tableIndex: ReactiveVar<number>;
  selectedTabLectures: ReactiveVar<Array<LectureInfos[]>>;
  colorIndex: ReactiveVar<number>;
  lectures: ReactiveVar<LectureInfos[]>;
}

const colors = [
  '#ff8a80',
  '#ff80ab',
  '#ea80fc',
  '#b388ff',
  '#8c9eff',
  '#82b1ff',
  '#80d8ff',
  '#84ffff',
  '#a7ffeb',
  '#b9f6ca',
  '#ccff90',
  '#f4ff81',
  '#ffff8d',
  '#ffe57f',
  '#ffd180',
  '#ff9e80',
];

class TimeTableStore {
  rootStore: RootStore;

  state: TimeTableStoreState;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.state = {
      selectedTabIdx: makeVar<any>(false),
      tables: makeVar<TableInfo[]>([]),
      tableIndex: makeVar(0),
      selectedTabLectures: makeVar<Array<LectureInfos[]>>([]),
      colorIndex: makeVar<number>(Math.floor(Math.random() * colors.length)),
      lectures: makeVar<LectureInfos[]>(testData),
    };
  }

  selectTab(newSelectedTabIdx: any): void {
    const { selectedTabIdx } = this.state;

    if (selectedTabIdx === newSelectedTabIdx) return;

    selectedTabIdx(newSelectedTabIdx);
  }

  addTable(name: string): void {
    const { tableIndex, tables, selectedTabLectures } = this.state;
    const nextIndex = tableIndex() + 1;
    const newTable = {
      name,
      index: nextIndex,
    };
    const newTables = [...tables(), newTable];

    tables(newTables);
    tableIndex(nextIndex);

    const newLectures = [...selectedTabLectures(), []];
    selectedTabLectures(newLectures);

    this.selectTab(tables().length);
  }

  removeTable(): void {
    const { tables, selectedTabIdx, selectedTabLectures } = this.state;

    if (tables().length === 1) return;

    const nextSelectedTab = selectedTabIdx() === 1 ? 0 : selectedTabIdx() - 1;
    const newTables = tables().filter((elem, idx) => idx !== selectedTabIdx() - 1);

    tables(newTables);

    const newLectures = selectedTabLectures().filter((elem, idx) => idx !== selectedTabIdx() - 1);
    selectedTabLectures(newLectures);

    this.selectTab(nextSelectedTab);
  }

  addLectureToTable(input: LectureInfos): void {
    const { selectedTabIdx, selectedTabLectures } = this.state;
    if (!selectedTabIdx()) return;
    const isNoDuplicateLecture = selectedTabLectures()[selectedTabIdx() - 1].every((curr) => curr.name !== input.name);
    if (!isNoDuplicateLecture) return;
    const inputWithColor = { ...input, color: this.getColor() };
    const newLecture = [...selectedTabLectures()[selectedTabIdx() - 1], inputWithColor];
    const newLectures = selectedTabLectures().map((elem, idx) => {
      if (idx === selectedTabIdx() - 1) return newLecture;
      return elem;
    });
    this.setNextColor();
    selectedTabLectures(newLectures);
  }

  removeLectureFromTable(input: string): void {
    const { selectedTabIdx, selectedTabLectures } = this.state;
    const newLecture = [...selectedTabLectures()[selectedTabIdx() - 1]].filter((elem) => elem.name !== input);
    const newLectures = selectedTabLectures().map((elem, idx) => {
      if (idx === selectedTabIdx() - 1) return newLecture;
      return elem;
    });
    selectedTabLectures(newLectures);
  }

  getLecturesFromTable(): LectureInfos[] {
    const { selectedTabIdx, selectedTabLectures } = this.state;
    return selectedTabLectures()[selectedTabIdx()];
  }

  setNextColor(): void {
    const { colorIndex } = this.state;
    const nextColorIndex = (colorIndex() + 1) % colors.length;
    colorIndex(nextColorIndex);
  }

  getColor(): string {
    const { colorIndex } = this.state;
    return colors[colorIndex()];
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
    code: 'HANPYd',
    name: '디자인커뮤니케이션',
    class: '01',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: [{ start: 3660, end: 3780 }],
  },
  {
    code: 'HANPYe',
    name: '디자인커뮤니케이션',
    class: '01',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: [{ start: 3660, end: 3780 }],
  },
  {
    code: 'HANPYf',
    name: '디자인커뮤니케이션',
    class: '01',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: [{ start: 3660, end: 3780 }],
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

export default TimeTableStore;
