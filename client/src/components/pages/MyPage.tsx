import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { MyPageMenus } from '@/components/UI/molecules';

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
    boxSizing: 'border-box',
    width: '25%',
    padding: '1.5rem 2rem',
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: '1rem',
    boxShadow: '1px 3px 5px 1px rgba(0, 0, 0, 0.12)',
    backgroundColor: '#fffaf3',
  },
  right: {
    display: 'flex',
    justifyContent: 'center',
    boxSizing: 'border-box',
    padding: '1.5rem',
    width: '70%',
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: '1rem',
    boxShadow: '1px 3px 5px 1px rgba(0, 0, 0, 0.12)',
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
        <div className={classes.left}>
          <MyPageMenus />
        </div>
        <div className={classes.right}>바디오른쪽</div>
      </div>
    </div>
  );
};

export default MyPage;
