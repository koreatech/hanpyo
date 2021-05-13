import React from 'react';
import { DialogTitle, DialogContent, DialogActions, TextField, Typography, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Button, ButtonType } from '@/components/UI/atoms';

enum SignUpModalType {
  SIGN_UP_MODAL = 'SIGN_UP_MODAL',
}

interface SignupValid {
  isValidEmail: boolean;
  isValidPassword: boolean;
  isValidName: boolean;
  isValidNickname: boolean;
  isValidGrade: boolean;
  isValidMajor: boolean;
}

interface SelectValue {
  gradeValue: string;
  majorValue: string;
}

interface SignUpModalContentProps {
  valid: SignupValid;
  selectValue: SelectValue;
  isSignupDisabled: boolean;
  onSignupBtnClick: () => void;
  onEmailChange: () => void;
  onPasswordChange: () => void;
  onNameChange: () => void;
  onNicknameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onGradeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onMajorChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onMoveLoginBtnClick: () => void;
}

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '1.7rem',
    color: theme.palette.primary.main,
  },
  checkArea: {
    display: 'flex',
    '& > *': {
      marginRight: '0.5rem',
    },
    '& > *:not(:first-child)': {
      marginTop: '0.4375rem',
    },
  },
  checkButton: {
    marginTop: '0.4375rem',
  },
  selectArea: {
    display: 'flex',
    '& > *': {
      marginRight: '0.5rem',
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

const HELPER_TEXT = {
  EMAIL: {
    DEFAULT: '아이디는 한기대 포털 아이디입니다. @koreatech.ac.kr은 빼고 입력해주세요.',
    SUCCESS: '사용가능한 아이디입니다.',
    CHECK: '아이디 중복체크를 진행해주세요.',
    CHECK_ERROR: '중복된 아이디입니다.',
    ERROR: '한기대 포털 아이디는 1자리 이상 12자리 이하 / 영소문자, 숫자, _ 로만 조합되어야합니다. ',
  },
  PASSWORD: {
    DEFAULT: '비밀번호는 8자 이상 12자 이하 / 영문, 특수문자, 숫자 모두 최소 1개 포함해야합니다',
  },
  NAME: {
    DEFAULT: '이름은 최소 2자 이상 / 한글로만 조합되어야합니다.',
  },
  NICKNAME: {
    DEFAULT: '닉네임은 최소 1자리 이상 / 영문, 한글, 숫자로만 조합되어야합니다.',
    SUCCESS: '사용가능한 닉네임입니다.',
    CHECK: '닉네임 중복체크를 진행해주세요.',
    CHECK_ERROR: '중복된 닉네임입니다.',
  },
  GRADE: {
    DEFAULT: '학년을 선택해주세요.',
  },
  MAJOR: {
    DEFAULT: '전공을 선택해주세요.',
  },
};

const SIGNUP_BUTTON_STYLE_PROPS = { width: 192, height: 35.2, borderRadius: 4, fontSize: 16 };
const CHECK_BUTTON_STYLE_PROPS = { width: 96, height: 40, borderRadius: 4, fontSize: 13 };

const GRADES = [1, 2, 3, 4];

const MAJORS = [
  '기계공학부',
  '메카트로닉스공학부',
  '전기전자통신공학부',
  '컴퓨터공학부',
  '디자인건축공학부',
  '에너지신소재화학공학부',
  '산업경영학부',
  '교양학부',
  'HRD학과',
  '융합학과',
];

const SignUpModalContent = ({
  valid,
  selectValue,
  isSignupDisabled,
  onSignupBtnClick,
  onEmailChange,
  onPasswordChange,
  onNameChange,
  onNicknameChange,
  onGradeChange,
  onMajorChange,
  onMoveLoginBtnClick,
}: SignUpModalContentProps): JSX.Element => {
  const classes = useStyles();
  const { isValidEmail, isValidPassword, isValidName, isValidNickname, isValidGrade, isValidMajor } = valid;
  const { gradeValue, majorValue } = selectValue;

  const getGradeSelectOptions = (): JSX.Element[] => {
    const gradeSelectOptions = GRADES.map((grade) => (
      <MenuItem key={grade} value={grade}>
        {grade}
      </MenuItem>
    ));

    return gradeSelectOptions;
  };

  const getMajorSelectOptions = (): JSX.Element[] => {
    const majorSelectOptions = MAJORS.map((major) => (
      <MenuItem key={major} value={major}>
        {major}
      </MenuItem>
    ));

    return majorSelectOptions;
  };

  return (
    <>
      <DialogTitle className={classes.title} id="SignUp-dialog-title" disableTypography>
        한표 회원가입
      </DialogTitle>
      <DialogContent>
        <div className={classes.checkArea}>
          <TextField
            autoComplete="off"
            helperText={isValidEmail ? HELPER_TEXT.EMAIL.DEFAULT : HELPER_TEXT.EMAIL.ERROR}
            error={!isValidEmail}
            autoFocus
            margin="dense"
            id="id"
            label="아이디"
            type="email"
            variant="outlined"
            required
            fullWidth
            onChange={onEmailChange}
          />
          <Button btnType={ButtonType.primary} color="secondary" style={CHECK_BUTTON_STYLE_PROPS}>
            중복체크
          </Button>
        </div>
        <TextField
          autoComplete="off"
          helperText={HELPER_TEXT.PASSWORD.DEFAULT}
          error={!isValidPassword}
          margin="dense"
          id="password"
          label="비밀번호"
          type="password"
          variant="outlined"
          required
          fullWidth
          onChange={onPasswordChange}
        />
        <TextField
          autoComplete="off"
          helperText={HELPER_TEXT.NAME.DEFAULT}
          error={!isValidName}
          margin="dense"
          id="name"
          label="이름"
          type="text"
          variant="outlined"
          required
          fullWidth
          onChange={onNameChange}
        />
        <div className={classes.checkArea}>
          <TextField
            autoComplete="off"
            helperText={HELPER_TEXT.NICKNAME.DEFAULT}
            error={!isValidNickname}
            margin="dense"
            id="nickname"
            label="닉네임"
            type="text"
            variant="outlined"
            required
            fullWidth
            onChange={onNicknameChange}
          />
          <Button btnType={ButtonType.primary} color="secondary" style={CHECK_BUTTON_STYLE_PROPS}>
            중복체크
          </Button>
        </div>
        <div className={classes.selectArea}>
          <TextField
            helperText={HELPER_TEXT.GRADE.DEFAULT}
            error={!isValidGrade}
            select
            label="학년"
            margin="dense"
            variant="outlined"
            value={gradeValue}
            required
            fullWidth
            onChange={onGradeChange}>
            {getGradeSelectOptions()}
          </TextField>
          <TextField
            helperText={HELPER_TEXT.MAJOR.DEFAULT}
            error={!isValidMajor}
            select
            label="전공"
            margin="dense"
            variant="outlined"
            value={majorValue}
            required
            fullWidth
            onChange={onMajorChange}>
            {getMajorSelectOptions()}
          </TextField>
        </div>
      </DialogContent>
      <DialogActions className={classes.dialogActionRoot}>
        <Button btnType={ButtonType.primary} onClick={onSignupBtnClick} style={SIGNUP_BUTTON_STYLE_PROPS} disabled={isSignupDisabled} fullWidth>
          회원가입
        </Button>
        <div className={classes.linkTextArea}>
          <Typography className={classes.linkText} variant="caption" onClick={onMoveLoginBtnClick}>
            이미 가입하셨나요? 로그인하기
          </Typography>
        </div>
      </DialogActions>
    </>
  );
};

export { SignUpModalContent, SignUpModalType };
export type { SignUpModalContentProps };
