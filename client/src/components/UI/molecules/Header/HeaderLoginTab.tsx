import React from 'react';
import Box from '@material-ui/core/Box';
import { Typography, TypographyType, Button, ButtonType } from '@/components/UI/atoms';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  logintab: {
    display: 'flex',
    height: '50%',
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
}));

const HeaderLoginTab = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Box className={classes.logintab}>
      <Typography typoType={TypographyType.grey5} size="XS">
        한표를 더 편리하게 이용하세요
      </Typography>
      <Button btnType={ButtonType.login}>로 그 인</Button>
      <Box className={classes.menu}>
        <Typography typoType={TypographyType.grey7} size="XS">
          회 원 가 입
        </Typography>
        <Box className={classes.divider} />
        <Typography typoType={TypographyType.grey7} size="XS">
          아 이 디 / 비 밀 번 호 찾기
        </Typography>
      </Box>
    </Box>
  );
};

export { HeaderLoginTab };
