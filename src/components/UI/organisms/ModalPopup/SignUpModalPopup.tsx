import React from 'react';
import { ModalPopupArea, SignUpModalContent } from '@/components/UI/molecules';
import { useMutation } from '@apollo/client';
import { SIGN_UP } from '@/queries';
import { useStores } from '@/stores';
import { useInputForm } from '@/common/hooks';

interface SignUpModalPopupProps {
  modalOpen: boolean;
  onModalAreaClose: () => void;
}

interface InputState {
  email: string;
  password: string;
  name: string;
  nickname: string;
  grade: string;
  major: string;
}

const INIT_INPUTS_STATE = {
  email: '',
  password: '',
  name: '',
  nickname: '',
  grade: '',
  major: '',
};

const SignUpModalPopup = ({ modalOpen, onModalAreaClose }: SignUpModalPopupProps): JSX.Element => {
  const [inputs, onInputChange, { reset, isEmpty, valids, isValid }] = useInputForm<InputState>(INIT_INPUTS_STATE, {
    validation: true,
  });
  const { email, password, name, nickname, grade, major } = inputs;

  const { modalStore, snackbarStore } = useStores();
  const [signUp] = useMutation(SIGN_UP, {
    onCompleted: () => {
      snackbarStore.showSignUpSuccessMsg();
      modalStore.openLoginModal();
    },
    onError: () => {
      snackbarStore.showSignUpFailedMsg();
    },
  });

  const onMoveLoginBtnClickListener = () => {
    modalStore.openLoginModal();
  };

  const onSignUpBtnClickListener = () => {
    signUp({
      variables: { email, password, name, nickname, grade, major },
    });
  };

  const onSignupModalCloseListener = () => {
    reset();
    onModalAreaClose();
  };

  const checkSignupDisabled = (): boolean => {
    return !(!isEmpty && isValid);
  };

  return (
    <ModalPopupArea modalOpen={modalOpen} onModalClose={onSignupModalCloseListener}>
      <SignUpModalContent
        valid={valids}
        selectValue={{ gradeValue: grade, majorValue: major }}
        isSignupDisabled={checkSignupDisabled()}
        onInputChange={onInputChange}
        onSignupBtnClick={onSignUpBtnClickListener}
        onMoveLoginBtnClick={onMoveLoginBtnClickListener}
      />
    </ModalPopupArea>
  );
};

export { SignUpModalPopup };
export type { SignUpModalPopupProps };
