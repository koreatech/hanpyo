import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { HeaderMenu } from '@/components/UI/atoms';
import { makeStyles } from '@material-ui/core/styles';

import { HeaderAuthSection } from '@/components/UI/molecules';

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
        <Typography variant="h3" color="primary">
          한표
        </Typography>
        <HeaderMenu>시간표짜기</HeaderMenu>
        <HeaderMenu>강의후기</HeaderMenu>
        <HeaderMenu>마이페이지</HeaderMenu>
        <HeaderAuthSection />
      </Box>
    </Box>
  );
};

export { Header };
