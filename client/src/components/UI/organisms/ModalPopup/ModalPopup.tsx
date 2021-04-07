/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { TimeTableModalType, LoginModalType } from '@/components/UI/molecules';
import { useStores } from '@/stores';
import { useReactiveVar } from '@apollo/client';
import { TimeTableModalPopup } from './TimeTableModalPopup';
import { LoginModalPopup } from './LoginModalPopup';

type ModalType = TimeTableModalType | LoginModalType;

const modalTypes = { ...TimeTableModalType, ...LoginModalType };

const ModalPopup = (): JSX.Element => {
  const { timeTableStore, modalStore } = useStores();
  const { modalState, modalType } = modalStore.state;
  const nowModalState = useReactiveVar(modalState);
  const nowModalType = useReactiveVar<ModalType>(modalType);

  const onModalCloseListener = () => {
    modalStore.setModalState(false);
  };

  const onTabAddModalBtnClickListener = () => {
    timeTableStore.addTable('시간표');
    modalStore.setModalState(false);
  };

  const onTabRemoveModalBtnClickListener = () => {
    timeTableStore.removeTable();
    modalStore.setModalState(false);
  };

  const getModalPopup = (): JSX.Element => {
    if (nowModalType === modalTypes.TAB_ADD_MODAL)
      return (
        <TimeTableModalPopup
          modalOpen={nowModalState}
          modalType={nowModalType}
          onModalBtnClick={onTabAddModalBtnClickListener}
          onModalAreaClose={onModalCloseListener}
        />
      );
    if (nowModalType === modalTypes.TAB_REMOVE_MODAL)
      return (
        <TimeTableModalPopup
          modalOpen={nowModalState}
          modalType={nowModalType}
          onModalBtnClick={onTabRemoveModalBtnClickListener}
          onModalAreaClose={onModalCloseListener}
        />
      );
    return <LoginModalPopup modalOpen={nowModalState} onModalBtnClick={() => {}} onModalAreaClose={onModalCloseListener} />;
  };

  return <>{getModalPopup()}</>;
};

export { ModalPopup, modalTypes };
export type { ModalType };
