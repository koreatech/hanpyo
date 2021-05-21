import React from 'react';
import { DialogTitle, DialogContent, DialogActions, TextField, Typography } from '@material-ui/core';
import { Button, ButtonType } from '@/components/UI/atoms';
import { makeStyles } from '@material-ui/core/styles';

enum FindModalType {
  FIND_MODAL = 'FIND_MODAL',
}

interface FindModalContentProps {
  valid: boolean[];
  isFindDisabled: boolean;
  onFindBtnClick: () => void;
  onInputChange: () => void;
}

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '1.7rem',
    color: theme.palette.primary.main,
  },
  dialogContentRoot: {
    paddingTop: 0,

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
  msgArea: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',

    '& > p': {
      marginBottom: '3px',
      fontSize: '13px',

      '&:last-of-type': {
        marginBottom: 0,
      },
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
  },
}));

const HELPER_TEXT = {
  EMAIL: {
    DEFAULT: '아이디는 한기대 포털 아이디입니다. @koreatech.ac.kr은 빼고 입력해주세요.',
    ERROR: '한기대 포털 아이디는 1자리 이상 12자리 이하 / 영소문자, 숫자, _ 로만 조합되어야합니다. ',
  },
  NAME: {
    DEFAULT: '이름을 입력해주세요.',
    ERROR: '이름은 최소 2자 이상 / 한글로만 조합되어야합니다.',
  },
};

const LOGIN_BUTTON_STYLE_PROPS = { width: 192, height: 35.2, borderRadius: 4, fontSize: 16 };

const FindModalContent = ({ valid, isFindDisabled, onInputChange, onFindBtnClick }: FindModalContentProps): JSX.Element => {
  const classes = useStyles();
  const [isValidEmail, isValidName] = valid;

  return (
    <>
      <DialogTitle className={classes.title} id="login-dialog-title" disableTypography>
        비밀번호 찾기
      </DialogTitle>
      <DialogContent className={classes.dialogContentRoot}>
        <div className={classes.msgArea}>
          <p>비밀번호는 이름, 가입한 아이디를 통해 랜덤하게 초기화됩니다.</p>
          <p>초기화된 비밀번호로 로그인 후 반드시 변경해주세요.</p>
        </div>
        <TextField
          autoComplete="off"
          autoFocus
          error={!isValidEmail}
          helperText={isValidEmail ? HELPER_TEXT.EMAIL.DEFAULT : HELPER_TEXT.EMAIL.ERROR}
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
          error={!isValidName}
          helperText={isValidName ? HELPER_TEXT.NAME.DEFAULT : HELPER_TEXT.NAME.ERROR}
          margin="dense"
          name="name"
          label="이름"
          type="text"
          variant="outlined"
          required
          fullWidth
          onChange={onInputChange}
        />
      </DialogContent>
      <DialogActions className={classes.dialogActionRoot}>
        <Button btnType={ButtonType.primary} onClick={onFindBtnClick} style={LOGIN_BUTTON_STYLE_PROPS} disabled={isFindDisabled} fullWidth>
          찾기
        </Button>
        <div className={classes.linkTextArea}>
          <Typography className={classes.linkText} variant="caption">
            입력한 내용이 올바르다면 초기화된 비밀번호가 이메일로 발송됩니다.
          </Typography>
        </div>
      </DialogActions>
    </>
  );
};

export { FindModalContent, FindModalType };
export type { FindModalContentProps };
