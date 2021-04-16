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
  lectures: ReactiveVar<Array<LectureInfos[]>>;
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
      lectures: makeVar<Array<LectureInfos[]>>([]),
      colorIndex: makeVar<number>(Math.floor(Math.random() * colors.length)),
    };
  }

  selectTab(newSelectedTabIdx: any): void {
    const { selectedTabIdx } = this.state;

    if (selectedTabIdx === newSelectedTabIdx) return;

    selectedTabIdx(newSelectedTabIdx);
  }

  addTable(name: string): void {
    const { tableIndex, tables, lectures } = this.state;
    const nextIndex = tableIndex() + 1;
    const newTable = {
      name,
      index: nextIndex,
    };
    const newTables = [...tables(), newTable];

    tables(newTables);
    tableIndex(nextIndex);

    const newLectures = [...lectures(), []];
    lectures(newLectures);

    this.selectTab(tables().length);
  }

  removeTable(): void {
    const { tables, selectedTabIdx, lectures } = this.state;

    if (tables().length === 1) return;

    const nextSelectedTab = selectedTabIdx() === 1 ? 0 : selectedTabIdx() - 1;
    const newTables = tables().filter((elem, idx) => idx !== selectedTabIdx() - 1);

    tables(newTables);

    const newLectures = lectures().filter((elem, idx) => idx !== selectedTabIdx() - 1);
    lectures(newLectures);

    this.selectTab(nextSelectedTab);
  }

  addLectureToTable(input: LectureInfos): void {
    const { selectedTabIdx, lectures } = this.state;
    if (!selectedTabIdx()) return;
    const isNoDuplicateLecture = lectures()[selectedTabIdx() - 1].every((curr) => curr.name !== input.name);
    if (!isNoDuplicateLecture) return;
    const inputWithColor = { ...input, color: this.getColor() };
    const newLecture = [...lectures()[selectedTabIdx() - 1], inputWithColor];
    const newLectures = lectures().map((elem, idx) => {
      if (idx === selectedTabIdx() - 1) return newLecture;
      return elem;
    });
    this.setNextColor();
    lectures(newLectures);
  }

  removeLectureFromTable(input: string): void {
    const { selectedTabIdx, lectures } = this.state;
    const newLecture = [...lectures()[selectedTabIdx() - 1]].filter((elem) => elem.name !== input);
    const newLectures = lectures().map((elem, idx) => {
      if (idx === selectedTabIdx() - 1) return newLecture;
      return elem;
    });
    lectures(newLectures);
  }

  getLecturesFromTable(): LectureInfos[] {
    const { selectedTabIdx, lectures } = this.state;
    return lectures()[selectedTabIdx()];
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
