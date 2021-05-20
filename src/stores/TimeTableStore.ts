import { makeVar, ReactiveVar } from '@apollo/client';
import { RootStore } from '@/stores';
import { SnackbarType } from '@/components/UI/atoms';
import { LectureInfos, TimeTypes } from '@/components/UI/molecules';

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

  checkDuplicateLectureName(lectureName: string): boolean {
    const { selectedTabIdx, selectedTabLectures } = this.state;
    return selectedTabLectures()[selectedTabIdx() - 1].every((curr) => curr.name !== lectureName);
  }

  checkTimeBound(lectureTimes: TimeTypes[] | string): boolean {
    const { selectedTabIdx } = this.state;
    if (typeof lectureTimes === 'string') return false;
    return lectureTimes.every((lectureTime) => lectureTime.start < lectureTime.end && lectureTime.start % 1440 >= 540);
  }

  checkDuplicateLectureTime(lectureTimes: TimeTypes[] | string): boolean {
    const { selectedTabIdx, selectedTabLectures } = this.state;
    if (typeof lectureTimes === 'string') return false;
    return lectureTimes.every((newLectureTime) => {
      return selectedTabLectures()[selectedTabIdx() - 1].every((curr) => {
        if (typeof curr.lectureTimes === 'string') return false;
        return curr.lectureTimes.every(
          (lectureTime) =>
            (newLectureTime.start < lectureTime.start && newLectureTime.end <= lectureTime.start) ||
            (newLectureTime.start >= lectureTime.end && newLectureTime.end > lectureTime.end),
        );
      });
    });
  }

  addLectureToTable(input: LectureInfos): SnackbarType {
    const { selectedTabIdx, selectedTabLectures } = this.state;
    if (!selectedTabIdx()) return SnackbarType.NO_TIMETABLE;
    if (!this.checkDuplicateLectureName(input.name)) return SnackbarType.DUPLICATE_LECTURE_NAME;
    if (!this.checkTimeBound(input.lectureTimes)) return SnackbarType.INVALID_TIME;
    if (!this.checkDuplicateLectureTime(input.lectureTimes)) return SnackbarType.DUPLICATE_LECTURE_TIME;
    const inputWithColor = { ...input, color: this.getColor() };
    const newLecture = [...selectedTabLectures()[selectedTabIdx() - 1], inputWithColor];
    const newLectures = selectedTabLectures().map((elem, idx) => {
      if (idx === selectedTabIdx() - 1) return newLecture;
      return elem;
    });
    this.setNextColor();
    selectedTabLectures(newLectures);
    return SnackbarType.ADD_SUCCESS;
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

export default TimeTableStore;
