/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { TimeTableModalType, LoginModalType, SignUpModalType, ReviewDetailModalType } from '@/components/UI/molecules';
import { useStores } from '@/stores';
import { useReactiveVar } from '@apollo/client';
import { TimeTableModalPopup } from './TimeTableModalPopup';
import { LoginModalPopup } from './LoginModalPopup';
import { SignUpModalPopup } from './SignUpModalPopup';
import { ReviewDetailModalPopup } from './ReviewDetailModalPopup';

type ModalType = TimeTableModalType | LoginModalType | SignUpModalType | ReviewDetailModalType;

const modalTypes = { ...TimeTableModalType, ...LoginModalType, ...SignUpModalType, ...ReviewDetailModalType };

const ModalPopup = (): JSX.Element => {
  const { timeTableStore, modalStore } = useStores();
  const { modalState, modalType } = modalStore.state;
  const nowModalState = useReactiveVar(modalState);
  const nowModalType = useReactiveVar<ModalType>(modalType);

  const onModalCloseListener = () => {
    modalStore.closeModal();
  };

  const onTabAddModalBtnClickListener = (timeTableTabTitle?: string) => {
    timeTableStore.addTable(timeTableTabTitle as string);
    modalStore.closeModal();
  };

  const onTabRemoveModalBtnClickListener = () => {
    timeTableStore.removeTable();
    modalStore.closeModal();
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

    if (nowModalType === modalTypes.SIGN_UP_MODAL) return <SignUpModalPopup modalOpen={nowModalState} onModalAreaClose={onModalCloseListener} />;

    if (nowModalType === modalTypes.REVIEW_DETAIL_MODAL)
      return (
        <ReviewDetailModalPopup
          modalOpen={nowModalState}
          onModalModifyBtnClick={() => {}}
          onModalDeleteBtnClick={() => {}}
          onModalAreaClose={onModalCloseListener}
        />
      );
    return <LoginModalPopup modalOpen={nowModalState} onModalAreaClose={onModalCloseListener} />;
  };

  return <>{getModalPopup()}</>;
};

export { ModalPopup, modalTypes };
export type { ModalType };
