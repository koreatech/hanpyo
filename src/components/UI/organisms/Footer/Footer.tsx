import React from 'react';
import { Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 'auto',
    width: '100%',
    height: '5rem',
    backgroundColor: theme.palette.secondary.main,
  },
  text: {
    color: theme.palette.grey[500],
  },
}));

const Footer = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link href="https://github.com/koreatech/hanpyo" className={classes.text}>
        GitHub
      </Link>
      <Link href="/" className={classes.text}>
        피드백
      </Link>
      <Link href="/" className={classes.text}>
        개인정보처리방침
      </Link>
      <Link href="/" className={classes.text}>
        책임의 한계와 법적 고지
      </Link>
      <Link href="/" className={classes.text}>
        Contact
      </Link>
    </div>
  );
};

export { Footer };
