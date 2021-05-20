import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { HeaderAuthSection, HeaderNavSection } from '@/components/UI/molecules';

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
        <HeaderNavSection />
        <HeaderAuthSection />
      </div>
    </div>
  );
};

export { Header };
