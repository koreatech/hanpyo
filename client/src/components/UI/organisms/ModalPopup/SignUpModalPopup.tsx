import React, { useState } from 'react';
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

const SignUpModalPopup = ({ modalOpen, onModalAreaClose }: SignUpModalPopupProps): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [grade, setGrade] = useState('');
  const [major, setMajor] = useState('');

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidName, setIsValidName] = useState(true);
  const [isValidNickname, setIsValidNickname] = useState(true);
  const [isValidGrade, setIsValidGrade] = useState(true);
  const [isValidMajor, setIsValidMajor] = useState(true);

  const { modalStore } = useStores();
  const [signup] = useMutation(SIGN_UP, {
    onCompleted: () => {
      modalStore.changeModalState(modalTypes.LOGIN_MODAL, true);
    },
  });

  const onDebouncedEmailChangeListener = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: emailIDValue } = e.target;

    setEmail(emailIDValue);
    setIsValidEmail(isEmailID(emailIDValue));
  }, 500);

  const onDebouncedPasswordChangeListener = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: passwordValue } = e.target;

    setPassword(passwordValue);
    setIsValidPassword(isPassword(passwordValue));
  }, 500);

  const onDebouncedNameChangeListener = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: nameValue } = e.target;

    setName(nameValue);
    setIsValidName(isName(nameValue));
  }, 500);

  const onNicknameChangeListener = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: nickNameValue } = e.target;

    setNickname(nickNameValue);
    setIsValidNickname(isNickname(nickNameValue));
  }, 500);

  const onGradeChangeListener = debounce((event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: gradeValue } = event.target;

    setGrade(gradeValue);
    setIsValidGrade(isGrade(gradeValue));
  }, 500);

  const onMajorChangeListener = debounce((event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: majorValue } = event.target;

    setMajor(majorValue);
    setIsValidMajor(isMajor(majorValue));
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
    setEmail('');
    setPassword('');
    setName('');
    setNickname('');
    setGrade('');
    setMajor('');
  };

  const resetValidDatas = () => {
    setIsValidEmail(true);
    setIsValidPassword(true);
    setIsValidName(true);
    setIsValidNickname(true);
    setIsValidGrade(true);
    setIsValidMajor(true);
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
