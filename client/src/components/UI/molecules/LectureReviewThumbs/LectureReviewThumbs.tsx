import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Thumb } from '@/components/UI/atoms';

interface LectureReviewThumbsProps {
  upScore: number;
  downScore: number;
  detail?: boolean;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}));

const LectureReviewThumbs = ({ upScore, downScore, detail = false }: LectureReviewThumbsProps): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Thumb score={upScore} detail={detail} />
      <Thumb score={downScore} thumbDown detail={detail} />
    </div>
  );
};

export { LectureReviewThumbs };
export type { LectureReviewThumbsProps };
