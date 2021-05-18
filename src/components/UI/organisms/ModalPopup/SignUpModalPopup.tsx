import React from 'react';
import { ModalPopupArea, SignUpModalContent } from '@/components/UI/molecules';
import { useMutation, useLazyQuery } from '@apollo/client';
import { SIGN_UP, MEMBER_DUPLICATED_BY_EMAIL, MEMBER_DUPLICATED_BY_NICKNAME } from '@/queries';
import { GetMemberDuplicatedByEmail, GetMemberDuplicatedByNickname } from '@/api';
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

enum DuplicateCheckingType {
  email = 'email',
  nickname = 'nickname',
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

  const [
    getMemberDuplicatedByEmail,
    { data: emailDulicatedData, called: emailDulicatedCalled, loading: emailDulicatedLoading },
  ] = useLazyQuery<GetMemberDuplicatedByEmail>(MEMBER_DUPLICATED_BY_EMAIL, {
    variables: { email },
    fetchPolicy: 'network-only',
  });

  const [
    getMemberDuplicatedByNickname,
    { data: nicknameDulicatedData, called: nicknameDulicatedCalled, loading: nicknameDulicatedLoading },
  ] = useLazyQuery<GetMemberDuplicatedByNickname>(MEMBER_DUPLICATED_BY_NICKNAME, {
    variables: { nickname },
    fetchPolicy: 'network-only',
  });

  const onCheckDuplicatedBtnClickListener = (type: string) => {
    if (type === DuplicateCheckingType.email) {
      getMemberDuplicatedByEmail();
    }

    if (type === DuplicateCheckingType.nickname) {
      getMemberDuplicatedByNickname();
    }
  };

  const checkEmailDuplicated = (): boolean => {
    if (!emailDulicatedData) {
      return true;
    }
    return emailDulicatedData.memberDuplicatedByEmail;
  };

  const checkNicknameDuplicated = (): boolean => {
    if (!nicknameDulicatedData) {
      return true;
    }
    return nicknameDulicatedData.memberDuplicatedByNickname;
  };

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
    return !(!isEmpty && isValid && !emailDulicatedLoading && !checkEmailDuplicated() && !nicknameDulicatedLoading && !checkNicknameDuplicated());
  };

  return (
    <ModalPopupArea modalOpen={modalOpen} onModalClose={onSignupModalCloseListener}>
      <SignUpModalContent
        valid={valids}
        selectValue={{ gradeValue: grade, majorValue: major }}
        emailCheckInfo={{ email, duplicated: checkEmailDuplicated(), called: emailDulicatedCalled, loading: emailDulicatedLoading }}
        nicknameCheckInfo={{ nickname, duplicated: checkNicknameDuplicated(), called: nicknameDulicatedCalled, loading: nicknameDulicatedLoading }}
        isSignupDisabled={checkSignupDisabled()}
        onInputChange={onInputChange}
        onSignupBtnClick={onSignUpBtnClickListener}
        onMoveLoginBtnClick={onMoveLoginBtnClickListener}
        onCheckDuplicatedBtnClick={onCheckDuplicatedBtnClickListener}
      />
    </ModalPopupArea>
  );
};

export { SignUpModalPopup };
export type { SignUpModalPopupProps };
