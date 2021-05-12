import React from 'react';
import { useStores } from '@/stores';
import { modalTypes } from '@/components/UI/organisms';
import { HeaderAuthSectionArea } from './HeaderAuthSectionArea';

const HeaderAuthSection = (): JSX.Element => {
  const { modalStore } = useStores();

  const onLoginBtnClickListener = () => {
    modalStore.changeModalState(modalTypes.LOGIN_MODAL, true);
  };

  const onSignUpBtnClickListener = () => {
    modalStore.changeModalState(modalTypes.SIGN_UP_MODAL, true);
  };

  return <HeaderAuthSectionArea onLoginClick={onLoginBtnClickListener} onSignUpClick={onSignUpBtnClickListener} />;
};

export { HeaderAuthSection };
