/* eslint-disable react/no-array-index-key */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Header, LectureReviewContainer } from '@/components/UI/organisms';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const ReviewPage = (): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <LectureReviewContainer />
    </div>
  );
};

export default ReviewPage;
