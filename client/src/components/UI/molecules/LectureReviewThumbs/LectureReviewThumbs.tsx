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

  const onUpClickListener = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
  };

  const onDownClickListener = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
  };

  return (
    <div className={classes.root}>
      <Thumb score={upScore} detail={detail} onClick={onUpClickListener} />
      <Thumb score={downScore} thumbDown detail={detail} onClick={onDownClickListener} />
    </div>
  );
};

export { LectureReviewThumbs };
export type { LectureReviewThumbsProps };
