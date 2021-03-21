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

interface TimeTypes {
  start: number;
  end: number;
}

interface LectureInfo {
  time: Array<TimeTypes>;
  name: string;
  class?: string;
  prof: string;
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
const lectures = makeVar<Array<LectureInfo[]>>([]);

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
  const newLectures = [...lectures(), []];
  lectures(newLectures);
  modalState(false);
  console.log(lectures());
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
  const newLectures = lectures().filter((elem, idx) => idx !== nowSelectedTab() - 1);
  lectures(newLectures);
  selectTab(nextSelectedTab);
  modalState(false);
};

const setModal = (type: string) => {
  modalType(type);
  modalInfo(modalInfos(modalType()));
  modalState(true);
};

function addLectureToTable(input: LectureInfo): void {
  if (!nowSelectedTab()) return;
  const isNoDuplicateLecture = lectures()[nowSelectedTab() - 1].every((curr) => curr.name !== input.name);
  if (!isNoDuplicateLecture) return;
  // Todo : 시간 중복됐을 때 추가 방지 코드 짜기
  const newLecture = [...lectures()[nowSelectedTab() - 1], input];
  console.log(newLecture);
  const newLectures = lectures().map((elem, idx) => {
    if (idx === nowSelectedTab() - 1) return newLecture;
    return elem;
  });
  lectures(newLectures);
  console.log(lectures());
}

function getLecturesFromTable(): LectureInfo[] {
  return lectures()[nowSelectedTab()];
}

export {
  nowSelectedTab,
  selectTab,
  tables,
  tableIndex,
  addTable,
  removeTable,
  modalState,
  modalType,
  setModal,
  modalInfo,
  lectures,
  addLectureToTable,
  getLecturesFromTable,
};
