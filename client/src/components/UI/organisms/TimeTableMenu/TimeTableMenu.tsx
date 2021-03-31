import React from 'react';
import { useStores } from '@/stores';
import { TimeTableModalType } from '@/components/UI/molecules';
import { useReactiveVar } from '@apollo/client';
import { TimeTableMenuArea } from './TimeTableMenuArea';

const TimeTableMenu = (): JSX.Element => {
  const { timeTableStore, modalStore } = useStores();
  const tables = useReactiveVar(timeTableStore.state.tables);
  const selectedTab = useReactiveVar(timeTableStore.state.selectedTabIdx);
  const mockTables = [
    {
      index: 1,
      name: '시간표1',
    },
    {
      index: 2,
      name: '시간표2',
    },
    {
      index: 3,
      name: '시간표3',
    },
    {
      index: 4,
      name: '시간표4',
    },
    {
      index: 5,
      name: '시간표5',
    },
  ];

  const mockSeletedTab = 1;

  const onTimeTableTabChangeListener = (e: React.ChangeEvent<{}>, newValue: number): void => {
    timeTableStore.selectTab(newValue);
  };

  const onTabAddBtnClickListener = () => {
    modalStore.changeModalState(TimeTableModalType.TAB_ADD_MODAL, true);
  };

  const onTabRemoveBtnClickListener = () => {
    modalStore.changeModalState(TimeTableModalType.TAB_REMOVE_MODAL, true);
  };

  return (
    <TimeTableMenuArea
      tables={tables}
      seletedTab={selectedTab}
      onTimeTableTabChange={onTimeTableTabChangeListener}
      onTabAddBtnClick={onTabAddBtnClickListener}
      onTabRemoveBtnClick={onTabRemoveBtnClickListener}
    />
  );
};

export { TimeTableMenu };
