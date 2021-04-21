import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Thumb } from '@/components/UI/atoms';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}));

const LectureReviewThumbs = (): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Thumb />
      <Thumb thumbDown />
    </div>
  );
};

export { LectureReviewThumbs };
