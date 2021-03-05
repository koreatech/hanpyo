/* eslint-disable @typescript-eslint/no-empty-function */
import { makeVar } from '@apollo/client';

interface TableInfo {
  name: string;
  index: number;
}

interface modalInfoType {
  title: string;
  isInputRequired: boolean;
  buttonTitle: string;
  onSubmit: (input?: any) => void;
  placeHolder?: string;
}

const modalInfos = (action: string): modalInfoType => {
  switch (action) {
    case 'ADD':
      return {
        title: '시간표를 추가하시겠어요?',
        isInputRequired: true,
        buttonTitle: '추가',
        onSubmit: addTable,
        placeHolder: '시간표 이름',
      };
    case 'DELETE':
      return {
        title: '시간표를 삭제하시겠어요?',
        isInputRequired: false,
        buttonTitle: '삭제',
        onSubmit: removeTable,
      };
    default:
      throw new Error('Unhandled action');
  }
};

const nowSelectedTab = makeVar<any>(0);
const tables = makeVar<TableInfo[]>([]);
const tableIndex = makeVar(0);
const modalState = makeVar<boolean>(false);
const modalType = makeVar('ADD');
const modalInfo = makeVar<modalInfoType>({
  title: '',
  isInputRequired: false,
  buttonTitle: '',
  onSubmit: () => {},
});

const selectTab = (index: any) => {
  nowSelectedTab(index);
};

const addTable = (name: string) => {
  const nextIndex = tableIndex() + 1;
  const newTable = {
    name,
    index: nextIndex,
  };
  const newTables = [...tables(), newTable];
  tables(newTables);
  tableIndex(nextIndex);
  selectTab(tables().length);
  modalState(false);
};

const removeTable = (input: any) => {
  if (tables().length === 1) return;
  let nextSelectedTab;
  if (nowSelectedTab() === 1) {
    nextSelectedTab = 0;
  } else {
    nextSelectedTab = nowSelectedTab() - 1;
  }
  const newTables = tables().filter((elem, idx) => idx !== nowSelectedTab() - 1);
  tables(newTables);
  selectTab(nextSelectedTab);
  modalState(false);
};

const setModal = (type: string) => {
  modalType(type);
  modalInfo(modalInfos(modalType()));
  modalState(true);
};

export { nowSelectedTab, selectTab, tables, tableIndex, addTable, removeTable, modalState, modalType, setModal, modalInfo };
