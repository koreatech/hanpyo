import React from 'react';
import { SnackbarType } from '@/components/UI/atoms';
import { ModalPopupArea, LoginModalContent } from '@/components/UI/molecules';
import { modalTypes } from '@/components/UI/organisms';
import { useStores } from '@/stores';
import { useFetchAsync, useInputForm } from '@/common/hooks';

interface LoginModalPopupProps {
  modalOpen: boolean;
  onModalAreaClose: () => void;
}

interface InputState {
  email: string;
  password: string;
}

const INIT_INPUTS_STATE = {
  email: '',
  password: '',
};

const LOGIN_URL = '/api/login';
const FETCH_OPTION = {
  method: 'POST',
};

const LoginModalPopup = ({ modalOpen, onModalAreaClose }: LoginModalPopupProps): JSX.Element => {
  const [inputs, onInputChange, { reset, isEmpty }] = useInputForm<InputState>(INIT_INPUTS_STATE);
  const { email, password } = inputs;

  const { modalStore, snackbarStore } = useStores();

  const [login] = useFetchAsync(LOGIN_URL, FETCH_OPTION, {
    onCompleted: () => {
      snackbarStore.setSnackbarType(SnackbarType.LOGIN_SUCCESS);
      snackbarStore.setSnackbarState(true);

      modalStore.setModalState(false);
    },
    onError: () => {
      snackbarStore.setSnackbarType(SnackbarType.LOGIN_FAILED);
      snackbarStore.setSnackbarState(true);
    },
  });

  const onLoginBtnClickListener = () => {
    login({ queryData: { email, password } });
  };

  const onMoveSignUpBtnClickListener = () => {
    modalStore.changeModalState(modalTypes.SIGN_UP_MODAL, true);
  };

  const onLoginModalCloseListener = () => {
    reset();
    onModalAreaClose();
  };

  return (
    <ModalPopupArea modalOpen={modalOpen} onModalClose={onLoginModalCloseListener}>
      <LoginModalContent
        isLoginDisabled={isEmpty}
        onLoginBtnClick={onLoginBtnClickListener}
        onInputChange={onInputChange}
        onMovesignUpBtnClick={onMoveSignUpBtnClickListener}
      />
    </ModalPopupArea>
  );
};

export { LoginModalPopup };
export type { LoginModalPopupProps };
