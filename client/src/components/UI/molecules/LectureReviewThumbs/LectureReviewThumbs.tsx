import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Thumb } from '@/components/UI/atoms';

interface LectureReviewThumbsProps {
  upScore: number;
  downScore: number;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}));

const LectureReviewThumbs = ({ upScore, downScore }: LectureReviewThumbsProps): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Thumb score={upScore} />
      <Thumb score={downScore} thumbDown />
    </div>
  );
};

export { LectureReviewThumbs };
export type { LectureReviewThumbsProps };
