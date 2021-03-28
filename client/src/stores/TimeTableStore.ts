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
}

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
    };
  }

  selectTab(newSelectedTabIdx: any): void {
    const { selectedTabIdx } = this.state;

    if (selectedTabIdx === newSelectedTabIdx) return;

    selectedTabIdx(newSelectedTabIdx);
  }

  addTable(name: string): void {
    const { modalStore } = this.rootStore;
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

  removeTable(input: any): void {
    const { modalStore } = this.rootStore;
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
    const newLecture = [...lectures()[selectedTabIdx()], input];
    const newLectures = lectures().map((elem, idx) => {
      if (idx === selectedTabIdx()) return newLecture;
      return elem;
    });
    lectures(newLectures);
  }

  getLecturesFromTable(): LectureInfos[] {
    const { selectedTabIdx, lectures } = this.state;
    return lectures()[selectedTabIdx()];
  }
}

export default TimeTableStore;
