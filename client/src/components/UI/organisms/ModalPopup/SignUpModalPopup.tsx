import React, { useState } from 'react';
import { ModalPopupArea, SignUpModalContent } from '@/components/UI/molecules';
import { isEmailID, isPassword, isName } from '@/common/utils/validator';
import { debounce } from '@/common/utils';

interface SignUpModalPopupProps {
  modalOpen: boolean;
  onModalAreaClose: () => void;
}

const SignUpModalPopup = ({ modalOpen, onModalAreaClose }: SignUpModalPopupProps): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidName, setIsValidName] = useState(true);

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

  const onSignUpBtnClickListener = () => {
    console.log('signup!');
  };

  return (
    <ModalPopupArea modalOpen={modalOpen} onModalClose={onModalAreaClose}>
      <SignUpModalContent
        valid={{ isValidEmail, isValidPassword, isValidName }}
        onModalClose={onSignUpBtnClickListener}
        onEmailChange={onDebouncedEmailChangeListener}
        onPasswordChange={onDebouncedPasswordChangeListener}
        onNameChange={onDebouncedNameChangeListener}
      />
    </ModalPopupArea>
  );
};

export { SignUpModalPopup };
export type { SignUpModalPopupProps };
