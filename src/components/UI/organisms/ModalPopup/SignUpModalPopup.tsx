import React, { useRef, useEffect } from 'react';
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
  const emailDulicatedCalled = useRef(false);
  const nicknameDulicatedCalled = useRef(false);

  const [inputs, onInputChange, { reset, isEmpty, valids, isValid }] = useInputForm<InputState>(INIT_INPUTS_STATE, {
    validation: true,
    callback: (name: string) => {
      if (name === DuplicateCheckingType.email) {
        emailDulicatedCalled.current = false;
      }

      if (name === DuplicateCheckingType.nickname) {
        nicknameDulicatedCalled.current = false;
      }
    },
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

  const onCheckDuplicatedError = () => {
    snackbarStore.showCheckDuplicatedFailedMsg();
  };

  const [getMemberDuplicatedByEmail, { data: emailDulicatedData, loading: emailDulicatedLoading }] = useLazyQuery<GetMemberDuplicatedByEmail>(
    MEMBER_DUPLICATED_BY_EMAIL,
    {
      fetchPolicy: 'no-cache',
      onError: onCheckDuplicatedError,
    },
  );

  const [
    getMemberDuplicatedByNickname,
    { data: nicknameDulicatedData, loading: nicknameDulicatedLoading },
  ] = useLazyQuery<GetMemberDuplicatedByNickname>(MEMBER_DUPLICATED_BY_NICKNAME, {
    fetchPolicy: 'no-cache',
    onError: onCheckDuplicatedError,
  });

  const onCheckDuplicatedBtnClickListener = (type: string) => {
    if (type === DuplicateCheckingType.email) {
      emailDulicatedCalled.current = true;
      getMemberDuplicatedByEmail({ variables: { email } });
    }

    if (type === DuplicateCheckingType.nickname) {
      nicknameDulicatedCalled.current = true;
      getMemberDuplicatedByNickname({ variables: { nickname } });
    }
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

  const checkEmailDuplicated = (): boolean => {
    if (!emailDulicatedData) return true;
    return emailDulicatedData.memberDuplicatedByEmail;
  };

  const checkNicknameDuplicated = (): boolean => {
    if (!nicknameDulicatedData) return true;
    return nicknameDulicatedData.memberDuplicatedByNickname;
  };

  const checkEmailInfo = (): boolean => {
    return !emailDulicatedLoading && !checkEmailDuplicated() && emailDulicatedCalled.current;
  };

  const checkNicknameInfo = (): boolean => {
    return !nicknameDulicatedLoading && !checkNicknameDuplicated() && nicknameDulicatedCalled.current;
  };

  const checkSignupDisabled = (): boolean => {
    return !(!isEmpty && isValid && checkEmailInfo() && checkNicknameInfo());
  };

  return (
    <ModalPopupArea modalOpen={modalOpen} onModalClose={onSignupModalCloseListener}>
      <SignUpModalContent
        valid={valids}
        selectValue={{ gradeValue: grade, majorValue: major }}
        emailCheckInfo={{ email, duplicated: checkEmailDuplicated(), called: emailDulicatedCalled.current, loading: emailDulicatedLoading }}
        nicknameCheckInfo={{
          nickname,
          duplicated: checkNicknameDuplicated(),
          called: nicknameDulicatedCalled.current,
          loading: nicknameDulicatedLoading,
        }}
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
