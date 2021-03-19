import { makeVar, ReactiveVar } from '@apollo/client';
import { RootStore } from '@/stores';

interface TableInfo {
  name: string;
  index: number;
}

interface TimeTableStoreState {
  selectedTabIdx: ReactiveVar<any>;
  tables: ReactiveVar<TableInfo[]>;
  tableIndex: ReactiveVar<number>;
}

class TimeTableStore {
  rootStore: RootStore;

  state: TimeTableStoreState;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.state = {
      selectedTabIdx: makeVar<any>(0),
      tables: makeVar<TableInfo[]>([]),
      tableIndex: makeVar(0),
    };
  }

  selectTab(newSelectedTabIdx: any): void {
    const { selectedTabIdx } = this.state;

    if (selectedTabIdx === newSelectedTabIdx) return;

    selectedTabIdx(newSelectedTabIdx);
  }

  addTable(name: string): void {
    const { modalStore } = this.rootStore;
    const { tableIndex, tables } = this.state;
    const nextIndex = tableIndex() + 1;
    const newTable = {
      name,
      index: nextIndex,
    };
    const newTables = [...tables(), newTable];

    tables(newTables);
    tableIndex(nextIndex);

    this.selectTab(tables().length);
    modalStore.setModalState(false);
  }

  removeTable(input: any): void {
    const { modalStore } = this.rootStore;
    const { tables, selectedTabIdx } = this.state;

    if (tables().length === 1) return;

    const nextSelectedTab = selectedTabIdx() === 1 ? 0 : selectedTabIdx() - 1;
    const newTables = tables().filter((elem, idx) => idx !== selectedTabIdx() - 1);

    tables(newTables);
    this.selectTab(nextSelectedTab);
    modalStore.setModalState(false);
  }
}

export default TimeTableStore;
