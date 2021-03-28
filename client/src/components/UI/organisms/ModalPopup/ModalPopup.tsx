import React from 'react';
import { TimeTableModalType } from '@/components/UI/molecules';
import { useStores } from '@/stores';
import { useReactiveVar } from '@apollo/client';
import { TimeTableModalPopup } from './TimeTableModalPopup';

const ModalPopup = (): JSX.Element => {
  const { timeTableStore, modalStore } = useStores();
  const { modalState, modalType } = modalStore.state;
  const nowModalState = useReactiveVar(modalState);
  const nowModalType = useReactiveVar(modalType);

  const onModalCloseListener = () => {
    modalStore.setModalState(false);
  };

  const onTabAddModalBtnClickListener = () => {
    timeTableStore.addTable('시간표');
    modalStore.setModalState(false);
  };

  const onTabRemoveModalBtnClickListener = () => {
    alert('remove');
    modalStore.setModalState(false);
  };

  const getModalPopup = (): JSX.Element => {
    if (nowModalType === TimeTableModalType.TAB_ADD_MODAL)
      return (
        <TimeTableModalPopup
          modalOpen={nowModalState}
          modalType={nowModalType}
          onModalBtnClick={onTabAddModalBtnClickListener}
          onModalAreaClose={onModalCloseListener}
        />
      );
    return (
      <TimeTableModalPopup
        modalOpen={nowModalState}
        modalType={nowModalType}
        onModalBtnClick={onTabRemoveModalBtnClickListener}
        onModalAreaClose={onModalCloseListener}
      />
    );
  };

  return <>{getModalPopup()}</>;
};

export { ModalPopup };
