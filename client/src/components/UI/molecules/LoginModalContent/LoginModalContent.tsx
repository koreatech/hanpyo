import React, { useState, useEffect } from 'react';
import { Button, DialogTitle, DialogContent, DialogActions, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDebounce } from '@/common/utils';

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

const LoginModalContent = ({ onModalClose }: LoginModalContentProps): JSX.Element => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const onEmailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onPasswordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const debouncedEmail = useDebounce({ value: email, delay: 500 });
  const debouncedPassword = useDebounce({ value: password, delay: 500 });

  useEffect(() => {
    if (debouncedEmail) {
      console.log(debouncedEmail.length);
      if (debouncedEmail.length < 8 || debouncedEmail.length > 12) setIsValidEmail(false);
      else setIsValidEmail(true);
    }
    if (debouncedPassword) {
      console.log(debouncedPassword.length);
      if (debouncedPassword.length < 8 || debouncedPassword.length > 12) setIsValidPassword(false);
      else setIsValidPassword(true);
    }
  }, [debouncedEmail, debouncedPassword]);

  return (
    <>
      <DialogTitle className={classes.title} id="login-dialog-title" disableTypography>
        한표 로그인
      </DialogTitle>
      <DialogContent>
        <TextField
          autoComplete="off"
          helperText={isValidEmail ? 'koreatech.ac.kr은 빼고 입력해주세요.' : 'Email 형식이 적합하지 않습니다.'}
          error={!isValidEmail}
          autoFocus
          margin="dense"
          id="id"
          label="아이디"
          type="email"
          fullWidth
          onChange={onEmailChangeHandler}
        />
        <TextField
          autoComplete="off"
          helperText={isValidPassword ? 'Password는 8자 이상 12자 이하로 입력해주세요.' : 'Password 형식이 적합하지 않습니다.'}
          error={!isValidPassword}
          margin="dense"
          id="password"
          label="비밀번호"
          type="password"
          fullWidth
          onChange={onPasswordChangeHandler}
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
