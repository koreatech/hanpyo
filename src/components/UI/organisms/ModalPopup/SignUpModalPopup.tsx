import React, { useState } from 'react';
import { SnackbarType } from '@/components/UI/atoms';
import { ModalPopupArea, SignUpModalContent } from '@/components/UI/molecules';
import { modalTypes } from '@/components/UI/organisms';
import { isEmailID, isPassword, isName, isNickname, isGrade, isMajor } from '@/common/utils/validator';
import { debounce } from '@/common/utils';
import { useMutation } from '@apollo/client';
import { SIGN_UP } from '@/queries';
import { useStores } from '@/stores';

interface SignUpModalPopupProps {
  modalOpen: boolean;
  onModalAreaClose: () => void;
}

const INIT_INPUTS_STATE = {
  email: '',
  password: '',
  name: '',
  nickname: '',
  grade: '',
  major: '',
};

const INIT_VALID_STATE = {
  isValidEmail: true,
  isValidPassword: true,
  isValidName: true,
  isValidNickname: true,
  isValidGrade: true,
  isValidMajor: true,
};

const SignUpModalPopup = ({ modalOpen, onModalAreaClose }: SignUpModalPopupProps): JSX.Element => {
  const [inputs, setInputs] = useState(INIT_INPUTS_STATE);
  const { email, password, name, nickname, grade, major } = inputs;

  const [valids, setValids] = useState(INIT_VALID_STATE);
  const { isValidEmail, isValidPassword, isValidName, isValidNickname, isValidGrade, isValidMajor } = valids;

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

  const onDebouncedEmailChangeListener = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: emailIDValue } = e.target;

    setInputs({ ...inputs, email: emailIDValue });
    setValids({ ...valids, isValidEmail: isEmailID(emailIDValue) });
  }, 500);

  const onDebouncedPasswordChangeListener = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: passwordValue } = e.target;

    setInputs({ ...inputs, password: passwordValue });
    setValids({ ...valids, isValidPassword: isPassword(passwordValue) });
  }, 500);

  const onDebouncedNameChangeListener = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: nameValue } = e.target;

    setInputs({ ...inputs, name: nameValue });
    setValids({ ...valids, isValidName: isName(nameValue) });
  }, 500);

  const onNicknameChangeListener = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: nickNameValue } = e.target;

    setInputs({ ...inputs, nickname: nickNameValue });
    setValids({ ...valids, isValidNickname: isNickname(nickNameValue) });
  }, 500);

  const onGradeChangeListener = debounce((event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: gradeValue } = event.target;

    setInputs({ ...inputs, grade: gradeValue });
    setValids({ ...valids, isValidGrade: isGrade(gradeValue) });
  }, 500);

  const onMajorChangeListener = debounce((event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: majorValue } = event.target;

    setInputs({ ...inputs, major: majorValue });
    setValids({ ...valids, isValidMajor: isMajor(majorValue) });
  }, 500);

  const onMoveLoginBtnClickListener = () => {
    modalStore.changeModalState(modalTypes.LOGIN_MODAL, true);
  };

  const onSignUpBtnClickListener = () => {
    signup({
      variables: { email, password, name, nickname, grade, major },
    });
  };

  const resetFormDatas = () => {
    setInputs(INIT_INPUTS_STATE);
  };

  const resetValidDatas = () => {
    setValids(INIT_VALID_STATE);
  };

  const resetSignupForm = () => {
    resetFormDatas();
    resetValidDatas();
  };

  const onSignupModalCloseListener = () => {
    resetSignupForm();
    onModalAreaClose();
  };

  const checkEmptyFormDatas = (): boolean => {
    return !(email && password && name && nickname && grade && major);
  };

  const checkIsValidDatas = (): boolean => {
    return isValidEmail && isValidPassword && isValidName && isValidNickname && isValidGrade && isValidMajor;
  };

  const checkSignupDisabled = (): boolean => {
    const isExistEmptyFormDatas = checkEmptyFormDatas();
    const isValidDatas = checkIsValidDatas();

    return !(!isExistEmptyFormDatas && isValidDatas);
  };

  return (
    <ModalPopupArea modalOpen={modalOpen} onModalClose={onSignupModalCloseListener}>
      <SignUpModalContent
        valid={{ isValidEmail, isValidPassword, isValidName, isValidNickname, isValidGrade, isValidMajor }}
        selectValue={{ gradeValue: grade, majorValue: major }}
        isSignupDisabled={checkSignupDisabled()}
        onSignupBtnClick={onSignUpBtnClickListener}
        onEmailChange={onDebouncedEmailChangeListener}
        onPasswordChange={onDebouncedPasswordChangeListener}
        onNameChange={onDebouncedNameChangeListener}
        onNicknameChange={onNicknameChangeListener}
        onGradeChange={onGradeChangeListener}
        onMajorChange={onMajorChangeListener}
        onMoveLoginBtnClick={onMoveLoginBtnClickListener}
      />
    </ModalPopupArea>
  );
};

export { SignUpModalPopup };
export type { SignUpModalPopupProps };
