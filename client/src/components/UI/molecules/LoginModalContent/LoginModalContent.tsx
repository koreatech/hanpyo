import React from 'react';
import { Button, DialogTitle, DialogContent, DialogActions, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

  return (
    <>
      <DialogTitle className={classes.title} id="login-dialog-title" disableTypography>
        한표 로그인
      </DialogTitle>
      <DialogContent>
        <TextField autoFocus margin="dense" id="id" label="아이디" type="email" fullWidth />
        <TextField margin="dense" id="password" label="비밀번호" type="password" fullWidth />
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
