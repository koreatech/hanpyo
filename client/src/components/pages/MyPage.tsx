import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '1000px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    display: 'flex',
    width: '70rem',
    padding: '1rem 0',
  },
  body: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '70rem',
    height: '40rem',
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxSizing: 'border-box',
    width: '32.5%',
    padding: '1.5rem',
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: '1rem',
  },
  right: {
    display: 'flex',
    justifyContent: 'center',
    boxSizing: 'border-box',
    padding: '1.5rem',
    width: '62.5%',
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: '1rem',
  },
}));

const MyPage = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h5" color="primary">
          마이페이지
        </Typography>
      </div>
      <div className={classes.body}>
        <div className={classes.left}>바디왼쪽</div>
        <div className={classes.right}>바디오른쪽</div>
      </div>
    </div>
  );
};

export default MyPage;
