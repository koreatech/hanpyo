import React from 'react';
import { SnackbarType } from '@/components/UI/atoms';
import { ModalPopupArea, SignUpModalContent } from '@/components/UI/molecules';
import { modalTypes } from '@/components/UI/organisms';
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
  const [signup] = useMutation(SIGN_UP, {
    onCompleted: () => {
      snackbarStore.setSnackbarType(SnackbarType.SIGNUP_SUCCESS);
      snackbarStore.setSnackbarState(true);

      modalStore.changeModalState(modalTypes.LOGIN_MODAL, true);
    },
    onError: () => {
      snackbarStore.setSnackbarType(SnackbarType.SIGNUP_FAILED);
      snackbarStore.setSnackbarState(true);
    },
  });

  const onMoveLoginBtnClickListener = () => {
    modalStore.changeModalState(modalTypes.LOGIN_MODAL, true);
  };

  const onSignUpBtnClickListener = () => {
    signup({
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
