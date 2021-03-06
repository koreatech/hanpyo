import React from 'react';
import { ModalPopupArea, LoginModalContent } from '@/components/UI/molecules';
import { useStores } from '@/stores';
import { useFetchAsync, useInputForm } from '@/common/hooks';
import { MY_MEMBER_INFO } from '@/queries';
import { useLazyQuery } from '@apollo/client';

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
  const [getMyMemberInfo] = useLazyQuery(MY_MEMBER_INFO);

  const { modalStore, snackbarStore } = useStores();

  const [login] = useFetchAsync(LOGIN_URL, FETCH_OPTION, {
    onCompleted: () => {
      snackbarStore.showLoginSuccessMsg();
      modalStore.closeModal();

      getMyMemberInfo();
    },
    onError: () => {
      snackbarStore.showLoginFailedMsg();
    },
  });

  const onLoginBtnClickListener = () => {
    login({ queryData: { email, password } });
  };

  const onMoveSignUpBtnClickListener = () => {
    modalStore.openSignUpModal();
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
