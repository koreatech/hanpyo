import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minHeight: '1000px',
  },
});

const MyPage = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>마이페이지</div>
    </div>
  );
};

export default MyPage;
