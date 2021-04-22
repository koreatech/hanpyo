import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { LectureReviewContainer } from '@/components/UI/organisms';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '1000px',
  },
}));

const ReviewPage = (): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <LectureReviewContainer />
    </div>
  );
};

export default ReviewPage;
