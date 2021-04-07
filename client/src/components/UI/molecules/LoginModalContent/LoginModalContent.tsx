import React from 'react';
import { Button, DialogTitle, DialogContent, DialogActions, TextField } from '@material-ui/core';

enum LoginModalType {
  LOGIN_MODAL = 'LOGIN_MODAL',
}

interface LoginModalContentProps {
  onModalClose: () => void;
}

const LoginModalContent = ({ onModalClose }: LoginModalContentProps): JSX.Element => {
  return (
    <>
      <DialogTitle id="login-dialog-title">한표 로그인</DialogTitle>
      <DialogContent>
        <TextField autoFocus margin="dense" id="id" label="아이디" type="email" fullWidth />
        <TextField autoFocus margin="dense" id="password" label="비밀번호" type="password" fullWidth />
      </DialogContent>
    </>
  );
};

export { LoginModalContent, LoginModalType };
