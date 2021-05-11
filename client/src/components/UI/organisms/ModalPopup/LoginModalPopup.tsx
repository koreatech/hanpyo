import React, { useState } from 'react';
import { SnackbarType } from '@/components/UI/atoms';
import { ModalPopupArea, LoginModalContent } from '@/components/UI/molecules';
import { modalTypes } from '@/components/UI/organisms';
import { debounce } from '@/common/utils';
import { useStores } from '@/stores';
import { useFetchAsync } from '@/common/hooks';

interface LoginModalPopupProps {
  modalOpen: boolean;
  onModalAreaClose: () => void;
}

const LOGIN_URL = '/api/login';
const FETCH_OPTION = { method: 'POST' };

const LoginModalPopup = ({ modalOpen, onModalAreaClose }: LoginModalPopupProps): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { modalStore, snackbarStore } = useStores();

  const [login] = useFetchAsync(LOGIN_URL, FETCH_OPTION, {
    onCompleted: () => {
      snackbarStore.setSnackbarType(SnackbarType.LOGIN_SUCCESS);
      snackbarStore.setSnackbarState(true);

      modalStore.setModalState(false);
    },
  });

  const onDebouncedEmailChangeListener = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: emailIDValue } = e.target;

    setEmail(emailIDValue);
  }, 500);

  const onDebouncedPasswordChangeListener = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: passwordValue } = e.target;

    setPassword(passwordValue);
  }, 500);

  const onLoginBtnClickListener = () => {
    login({ email, password });
  };

  const onMoveSignUpBtnClickListener = () => {
    modalStore.changeModalState(modalTypes.SIGN_UP_MODAL, true);
  };

  const resetLoginForm = () => {
    setEmail('');
    setPassword('');
  };

  const onLoginModalCloseListener = () => {
    resetLoginForm();
    onModalAreaClose();
  };

  const checkEmptyFormDatas = (): boolean => {
    return !(email && password);
  };

  const checkLoginDisabled = (): boolean => {
    const isExistEmptyFormDatas = checkEmptyFormDatas();

    return isExistEmptyFormDatas;
  };

  return (
    <ModalPopupArea modalOpen={modalOpen} onModalClose={onLoginModalCloseListener}>
      <LoginModalContent
        isLoginDisabled={checkLoginDisabled()}
        onLoginBtnClick={onLoginBtnClickListener}
        onEmailChange={onDebouncedEmailChangeListener}
        onPasswordChange={onDebouncedPasswordChangeListener}
        onMovesignUpBtnClick={onMoveSignUpBtnClickListener}
      />
    </ModalPopupArea>
  );
};

export { LoginModalPopup };
export type { LoginModalPopupProps };
