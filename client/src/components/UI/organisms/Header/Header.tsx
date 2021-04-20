import React from 'react';
import { Typography } from '@material-ui/core';
import { HeaderMenu } from '@/components/UI/atoms';
import { makeStyles } from '@material-ui/core/styles';

import { HeaderAuthSection } from '@/components/UI/molecules';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '8rem',
    paddingRight: '21px',
    position: 'fixed',
    top: '0',
    zIndex: 1,
    backgroundColor: theme.palette.secondary.main,
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
}));

const Header = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <Typography variant="h3" color="primary">
          한표
        </Typography>
        <HeaderMenu link="/">시간표짜기</HeaderMenu>
        <HeaderMenu link="/review">강의후기</HeaderMenu>
        <HeaderMenu link="/my">마이페이지</HeaderMenu>
        <HeaderAuthSection />
      </div>
    </div>
  );
};

export { Header };
