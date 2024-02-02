import React from 'react';
import { useStores } from '@/stores';
import { useReactiveVar } from '@apollo/client';
import { TimeTableMenuArea } from './TimeTableMenuArea';

const TimeTableMenu = (): JSX.Element => {
  const { timeTableStore, modalStore } = useStores();
  const tables = useReactiveVar(timeTableStore.state.tables);
  const selectedTab = useReactiveVar(timeTableStore.state.selectedTabIdx);

  const onTimeTableTabChangeListener = (e: React.ChangeEvent<{}>, newValue: number): void => {
    timeTableStore.selectTab(newValue);
  };

  const onTabAddBtnClickListener = () => {
    modalStore.openTabAddModal();
  };

  const onTabRemoveBtnClickListener = () => {
    modalStore.openTabDeleteModal();
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
