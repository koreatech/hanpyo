import React from 'react';
import { DialogTitle, DialogContent, DialogActions, TextField, Typography } from '@material-ui/core';
import { Button, ButtonType } from '@/components/UI/atoms';
import { makeStyles } from '@material-ui/core/styles';

enum LoginModalType {
  LOGIN_MODAL = 'LOGIN_MODAL',
}

interface LoginModalContentProps {
  isLoginDisabled: boolean;
  onLoginBtnClick: () => void;
  onInputChange: () => void;
  onMovesignUpBtnClick: () => void;
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

const LoginModalContent = ({ isLoginDisabled, onLoginBtnClick, onInputChange, onMovesignUpBtnClick }: LoginModalContentProps): JSX.Element => {
  const classes = useStyles();

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
          name="email"
          label="아이디"
          type="email"
          variant="outlined"
          required
          fullWidth
          onChange={onInputChange}
        />
        <TextField
          autoComplete="off"
          margin="dense"
          name="password"
          label="비밀번호"
          type="password"
          variant="outlined"
          required
          fullWidth
          onChange={onInputChange}
        />
      </DialogContent>
      <DialogActions className={classes.dialogActionRoot}>
        <Button btnType={ButtonType.primary} onClick={onLoginBtnClick} style={LOGIN_BUTTON_STYLE_PROPS} disabled={isLoginDisabled} fullWidth>
          로그인
        </Button>
        <div className={classes.linkTextArea}>
          <Typography className={classes.linkText} variant="caption" onClick={onMovesignUpBtnClick}>
            한표를 더 편리하게 이용하세요. 회원가입하기
          </Typography>
        </div>
      </DialogActions>
    </>
  );
};

export { LoginModalContent, LoginModalType };
export type { LoginModalContentProps };
