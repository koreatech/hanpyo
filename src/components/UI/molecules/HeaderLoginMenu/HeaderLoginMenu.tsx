import React from 'react';
import { useStores } from '@/stores';
import { HeaderLoginMenuArea } from './HeaderLoginMenuArea';

const HeaderLoginMenu = (): JSX.Element => {
  const { modalStore } = useStores();

  const onLoginBtnClickListener = () => {
    modalStore.openLoginModal();
  };

  const onSignUpBtnClickListener = () => {
    modalStore.openSignUpModal();
  };

  const onFindPasswordBtnClickListener = () => {
    modalStore.openFindModal();
  };

  return (
    <HeaderLoginMenuArea
      onLoginBtnClick={onLoginBtnClickListener}
      onSignUpBtnClick={onSignUpBtnClickListener}
      onFindPasswordBtnClick={onFindPasswordBtnClickListener}
    />
  );
};

export { HeaderLoginMenu };
