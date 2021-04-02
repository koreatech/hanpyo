import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { Button, ButtonType } from '@/components/UI/atoms';
import { makeStyles } from '@material-ui/core/styles';

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
    margin: '0 3px',
  },
  authText: {
    color: theme.palette.grey[600],
  },
  promotionText: {
    color: theme.palette.grey[400],
  },
}));

const HeaderAuthSection = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Box className={classes.loginSection}>
      <Typography className={classes.promotionText} variant="caption">
        한표를 더 편리하게 이용하세요
      </Typography>
      <Button btnType={ButtonType.login}>로 그 인</Button>
      <Box className={classes.menu}>
        <Typography className={classes.authText} variant="caption">
          회 원 가 입
        </Typography>
        <Box className={classes.divider} />
        <Typography className={classes.authText} variant="caption">
          아 이 디 / 비 밀 번 호 찾기
        </Typography>
      </Box>
    </Box>
  );
};

export { HeaderAuthSection };
