import React, { useState } from 'react';
import { DialogTitle, DialogContent, DialogActions, TextField, Typography } from '@material-ui/core';
import { Button, ButtonType } from '@/components/UI/atoms';
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
  dialogContentRoot: {
    '&.MuiDialogContent-root': {
      overflow: 'hidden',
    },
  },
  dialogActionRoot: {
    display: 'flex',
    flexDirection: 'column',

    '&.MuiDialogActions-root': {
      padding: '1rem 1.5rem',
    },
  },
  linkTextArea: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    paddingTop: '1rem',
    margin: '0 !important',
  },
  linkText: {
    color: theme.palette.grey[600],
    '&:hover': {
      color: theme.palette.primary.main,
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  },
}));

const LOGIN_BUTTON_STYLE_PROPS = { width: 192, height: 35.2, borderRadius: 4, fontSize: 16 };

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
      <DialogContent className={classes.dialogContentRoot}>
        <TextField
          autoComplete="off"
          autoFocus
          margin="dense"
          id="id"
          label="아이디"
          type="email"
          variant="outlined"
          required
          fullWidth
          onChange={onDebouncedEmailChangeListener}
        />
        <TextField
          autoComplete="off"
          margin="dense"
          id="password"
          label="비밀번호"
          type="password"
          variant="outlined"
          required
          fullWidth
          onChange={onDebouncedPasswordChangeListener}
        />
      </DialogContent>
      <DialogActions className={classes.dialogActionRoot}>
        <Button btnType={ButtonType.primary} onClick={onModalClose} style={LOGIN_BUTTON_STYLE_PROPS} disabled fullWidth>
          로그인
        </Button>
        <div className={classes.linkTextArea}>
          <Typography className={classes.linkText} variant="caption">
            한표를 더 편리하게 이용하세요. 회원가입하기
          </Typography>
        </div>
      </DialogActions>
    </>
  );
};

export { LoginModalContent, LoginModalType };
export type { LoginModalContentProps };
