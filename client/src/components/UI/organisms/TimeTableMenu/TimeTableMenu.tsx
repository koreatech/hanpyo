import React from 'react';
import { useStores } from '@/stores';
import { TimeTableModalType } from '@/components/UI/molecules';
import { TimeTableMenuArea } from './TimeTableMenuArea';

const TimeTableMenu = (): JSX.Element => {
  const { modalStore } = useStores();

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

  const onTimeTableTabChangeListener = (): void => {
    alert('onTimeTableTabChangeListener');
  };

  const onTabAddBtnClickListener = () => {
    modalStore.changeModalState(TimeTableModalType.TAB_ADD_MODAL, true);
  };

  const onTabRemoveBtnClickListener = () => {
    modalStore.changeModalState(TimeTableModalType.TAB_REMOVE_MODAL, true);
  };

  return (
    <TimeTableMenuArea
      tables={mockTables}
      seletedTab={mockSeletedTab}
      onTimeTableTabChange={onTimeTableTabChangeListener}
      onTabAddBtnClick={onTabAddBtnClickListener}
      onTabRemoveBtnClick={onTabRemoveBtnClickListener}
    />
  );
};

export { TimeTableMenu };
