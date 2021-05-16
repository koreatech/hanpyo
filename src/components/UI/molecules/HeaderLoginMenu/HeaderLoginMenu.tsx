import React from 'react';
import { useStores } from '@/stores';
import { modalTypes } from '@/components/UI/organisms';
import { HeaderLoginMenuArea } from './HeaderLoginMenuArea';

const HeaderLoginMenu = (): JSX.Element => {
  const { modalStore } = useStores();

  const onLoginBtnClickListener = () => {
    modalStore.changeModalState(modalTypes.LOGIN_MODAL, true);
  };

  const onSignUpBtnClickListener = () => {
    modalStore.changeModalState(modalTypes.SIGN_UP_MODAL, true);
  };

  return <HeaderLoginMenuArea onLoginClick={onLoginBtnClickListener} onSignUpClick={onSignUpBtnClickListener} />;
};

export { HeaderLoginMenu };
