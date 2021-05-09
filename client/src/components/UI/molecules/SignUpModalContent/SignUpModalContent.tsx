import React from 'react';
import { Button, DialogTitle, DialogContent, DialogActions, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

enum SignUpModalType {
  SIGN_UP_MODAL = 'SIGN_UP_MODAL',
}

interface SignupValid {
  isValidEmail: boolean;
  isValidPassword: boolean;
  isValidName: boolean;
}

interface SignUpModalContentProps {
  valid: SignupValid;
  onModalClose: () => void;
  onEmailChange: () => void;
  onPasswordChange: () => void;
  onNameChange: () => void;
  onNicknameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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

const SignUpModalContent = ({
  valid,
  onModalClose,
  onEmailChange,
  onPasswordChange,
  onNameChange,
  onNicknameChange,
}: SignUpModalContentProps): JSX.Element => {
  const classes = useStyles();
  const { isValidEmail, isValidPassword, isValidName } = valid;

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
          onChange={onEmailChange}
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
          onChange={onPasswordChange}
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
          onChange={onNameChange}
        />
        <TextField autoComplete="off" margin="dense" id="nickname" label="닉네임" type="text" fullWidth onChange={onNicknameChange} />
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
