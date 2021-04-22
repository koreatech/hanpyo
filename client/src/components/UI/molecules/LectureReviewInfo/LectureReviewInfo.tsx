import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LectureReviewRating } from '@/components/UI/atoms';

interface LectureReviewInfoProps {
  lectureName: string;
  profName: string;
  rating: number;
  period: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  item: {
    marginLeft: '0.5rem',
  },
  weight: {
    fontWeight: 'bold',
  },
}));

const LectureReviewInfo = ({ lectureName, profName, rating, period }: LectureReviewInfoProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.weight} variant="subtitle1">
        {lectureName}
      </Typography>
      <Typography className={classes.item} variant="subtitle2">
        {profName}
      </Typography>
      <LectureReviewRating rating={rating} />
      <Typography className={classes.item} variant="overline">
        {period}
      </Typography>
    </div>
  );
};

export { LectureReviewInfo };
export type { LectureReviewInfoProps };
