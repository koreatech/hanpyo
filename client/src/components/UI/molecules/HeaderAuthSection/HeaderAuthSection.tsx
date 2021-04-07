import React from 'react';
import { useStores } from '@/stores';
import { modalTypes } from '@/components/UI/organisms';
import { HeaderAuthSectionArea } from './HeaderAuthSectionArea';

const HeaderAuthSection = (): JSX.Element => {
  const { modalStore } = useStores();

  const onLoginBtnClickListener = () => {
    modalStore.changeModalState(modalTypes.LOGIN_MODAL, true);
  };
  return <HeaderAuthSectionArea onClick={onLoginBtnClickListener} />;
};

export { HeaderAuthSection };
