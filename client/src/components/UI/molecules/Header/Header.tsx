import React from 'react';
import Box from '@material-ui/core/Box';
import { Typography, TypographyType } from '@/components/UI/atoms';
import { makeStyles } from '@material-ui/core/styles';
import { HeaderMenu } from './HeaderMenu';
import { HeaderLoginTab } from './HeaderLoginTab';

const useStyles = makeStyles({
  wrapper: {
    height: '8rem',
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    zIndex: 1,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '70rem',
  },
  title: {
    padding: '0 30px',
  },
});

const Header = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Box bgcolor="secondary.main" className={classes.wrapper}>
      <Box className={classes.container}>
        <Typography size="XL" typoType={TypographyType.primary}>
          한표
        </Typography>
        <HeaderMenu>시간표짜기</HeaderMenu>
        <HeaderMenu>강의후기</HeaderMenu>
        <HeaderMenu>마이페이지</HeaderMenu>
        <HeaderLoginTab />
      </Box>
    </Box>
  );
};

export { Header };
