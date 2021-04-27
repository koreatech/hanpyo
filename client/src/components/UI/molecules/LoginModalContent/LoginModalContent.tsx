import React, { useState } from 'react';
import { Button, DialogTitle, DialogContent, DialogActions, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { debounce } from '@/common/utils';
import { isEmailID, isPassword } from '@/common/utils/validator';

enum LoginModalType {
  LOGIN_MODAL = 'LOGIN_MODAL',
}

interface LoginModalContentProps {
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
};

const LoginModalContent = ({ onModalClose }: LoginModalContentProps): JSX.Element => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

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

  return (
    <>
      <DialogTitle className={classes.title} id="login-dialog-title" disableTypography>
        한표 로그인
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
      </DialogContent>
      <DialogActions>
        <Button onClick={onModalClose} color="primary">
          로그인
        </Button>
      </DialogActions>
    </>
  );
};

export { LoginModalContent, LoginModalType };
export type { LoginModalContentProps };
