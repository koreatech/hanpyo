import React, { useState } from 'react';
import { Button, DialogTitle, DialogContent, DialogActions, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { debounce } from '@/common/utils';
import { isEmailID, isPassword, isName } from '@/common/utils/validator';

enum SignUpModalType {
  SIGN_UP_MODAL = 'SIGN_UP_MODAL',
}

interface SignUpModalContentProps {
  onModalClose: () => void;
}

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '1.7rem',
    color: theme.palette.primary.main,
  },
}));

const HELPER_TEXT = {
  EMAIL: {
    DEFAULT: 'koreatech.ac.kr은 빼고 입력해주세요.',
    ERROR: 'Email 형식이 적합하지 않습니다.',
  },
  PASSWORD: {
    DEFAULT: 'Password는 8자 이상 12자 이하로 입력해주세요.',
    ERROR: 'Password 형식이 적합하지 않습니다.',
  },
  NAME: {
    DEFAULT: '이름은 2자 이상 입력해주세요.',
    ERROR: '이름 형식이 적합하지 않습니다.',
  },
};

const SignUpModalContent = ({ onModalClose }: SignUpModalContentProps): JSX.Element => {
  const classes = useStyles();
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

  return (
    <>
      <DialogTitle className={classes.title} id="SignUp-dialog-title" disableTypography>
        한표 회원가입
      </DialogTitle>
      <DialogContent>
        <TextField
          autoComplete="off"
          helperText={isValidEmail ? HELPER_TEXT.EMAIL.DEFAULT : HELPER_TEXT.EMAIL.ERROR}
          error={!isValidEmail}
          autoFocus
          margin="dense"
          id="id"
          label="아이디"
          type="email"
          fullWidth
          onChange={onDebouncedEmailChangeListener}
        />
        <TextField
          autoComplete="off"
          helperText={isValidPassword ? HELPER_TEXT.PASSWORD.DEFAULT : HELPER_TEXT.PASSWORD.ERROR}
          error={!isValidPassword}
          margin="dense"
          id="password"
          label="비밀번호"
          type="password"
          fullWidth
          onChange={onDebouncedPasswordChangeListener}
        />
        <TextField
          autoComplete="off"
          helperText={isValidName ? HELPER_TEXT.NAME.DEFAULT : HELPER_TEXT.NAME.ERROR}
          error={!isValidName}
          margin="dense"
          id="name"
          label="이름"
          type="text"
          fullWidth
          onChange={onDebouncedNameChangeListener}
        />
        <TextField autoComplete="off" margin="dense" id="nickname" label="닉네임" type="text" fullWidth />
      </DialogContent>
      <DialogActions>
        <Button onClick={onModalClose} color="primary">
          회원가입
        </Button>
      </DialogActions>
    </>
  );
};

export { SignUpModalContent, SignUpModalType };
export type { SignUpModalContentProps };
