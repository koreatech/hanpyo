import React from 'react';
import { Typography } from '@material-ui/core';
import { Button, ButtonType } from '@/components/UI/atoms';
import { makeStyles } from '@material-ui/core/styles';

interface HeaderLoginMenuAreaProps {
  onLoginBtnClick: () => void;
  onSignUpBtnClick: () => void;
  onFindPasswordBtnClick: () => void;
}

const BUTTON_STYLE_PROPS = { width: 192, height: 35.2, borderRadius: 4, fontSize: 19.2 };

const useStyles = makeStyles((theme) => ({
  loginSection: {
    display: 'flex',
    height: '5rem',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menu: {
    display: 'flex',
    justifyContent: 'center',
  },
  divider: {
    borderLeft: `1px solid ${theme.palette.grey[500]}`,
    margin: '0 0.3125rem',
  },
  authText: {
    color: theme.palette.grey[600],
    '&:hover': {
      color: theme.palette.primary.main,
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  },
  promotionText: {
    color: theme.palette.grey[400],
  },
}));

const HeaderLoginMenuArea = ({ onLoginBtnClick, onSignUpBtnClick, onFindPasswordBtnClick }: HeaderLoginMenuAreaProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.loginSection}>
      <Typography className={classes.promotionText} variant="caption">
        한표를 더 편리하게 이용하세요
      </Typography>
      <Button btnType={ButtonType.primary} style={BUTTON_STYLE_PROPS} onClick={onLoginBtnClick}>
        로 그 인
      </Button>
      <div className={classes.menu}>
        <Typography className={classes.authText} variant="caption" onClick={onSignUpBtnClick}>
          회 원 가 입
        </Typography>
        <div className={classes.divider} />
        <Typography className={classes.authText} variant="caption" onClick={onFindPasswordBtnClick}>
          비 밀 번 호 찾 기
        </Typography>
      </div>
    </div>
  );
};

export { HeaderLoginMenuArea };
