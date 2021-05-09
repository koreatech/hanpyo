import React, { useState } from 'react';
import { ModalPopupArea, SignUpModalContent } from '@/components/UI/molecules';
import { modalTypes } from '@/components/UI/organisms';
import { isEmailID, isPassword, isName } from '@/common/utils/validator';
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
  const [gradeValue, setGradeValue] = useState('');
  const [majorValue, setMajorValue] = useState('');

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidName, setIsValidName] = useState(true);
  const [isValidNickname, setIsValidNickname] = useState(true);

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

  const onNicknameChangeListener = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: nickNameValue } = e.target;

    setNickname(nickNameValue);
  };

  const onGradeChangeListener = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: gradeSelectValue } = event.target;

    setGradeValue(gradeSelectValue);
  };

  const onMajorChangeListener = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: majorSelectValue } = event.target;

    setMajorValue(majorSelectValue);
  };

  const isValidFormDatas = (): boolean => {
    return isValidEmail && isValidPassword && isValidName;
  };

  const onSignUpBtnClickListener = () => {
    if (!isValidFormDatas()) alert('회원가입 형식이 맞지 않습니다!');
    signup({
      variables: { email, password, name, nickname, grade: 1, major: 'CSE' },
    });
  };

  return (
    <ModalPopupArea modalOpen={modalOpen} onModalClose={onModalAreaClose}>
      <SignUpModalContent
        valid={{ isValidEmail, isValidPassword, isValidName, isValidNickname }}
        selectValue={{ gradeValue, majorValue }}
        onModalClose={onSignUpBtnClickListener}
        onEmailChange={onDebouncedEmailChangeListener}
        onPasswordChange={onDebouncedPasswordChangeListener}
        onNameChange={onDebouncedNameChangeListener}
        onNicknameChange={onNicknameChangeListener}
        onGradeChange={onGradeChangeListener}
        onMajorChange={onMajorChangeListener}
      />
    </ModalPopupArea>
  );
};

export { SignUpModalPopup };
export type { SignUpModalPopupProps };
