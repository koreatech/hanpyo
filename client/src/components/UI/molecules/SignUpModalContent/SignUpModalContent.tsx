import React, { useState } from 'react';
import { Button, DialogTitle, DialogContent, DialogActions, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

const SignUpModalContent = ({ onModalClose }: SignUpModalContentProps): JSX.Element => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [showedEmail, setShowedEmail] = useState('');

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setShowedEmail(`${e.target.value}@koreatech.ac.kr`);
  };

  return (
    <>
      <DialogTitle className={classes.title} id="SignUp-dialog-title" disableTypography>
        한표 회원가입
      </DialogTitle>
      <DialogContent>
        <TextField autoFocus value={showedEmail} margin="dense" id="id" label="아이디" type="email" fullWidth onChange={onChangeHandler} />
        <TextField margin="dense" id="password" label="비밀번호" type="password" fullWidth />
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
