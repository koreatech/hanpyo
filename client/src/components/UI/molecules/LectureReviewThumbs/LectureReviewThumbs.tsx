import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Thumb } from '@/components/UI/atoms';

interface LectureReviewThumbsProps {
  upScore: number;
  downScore: number;
  detail?: boolean;
  isMine?: boolean;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}));

const LectureReviewThumbs = ({ upScore, downScore, detail = false, isMine }: LectureReviewThumbsProps): JSX.Element => {
  const classes = useStyles();

  const onUpClickListener = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    if (isMine) return;
    console.log('up click');
  };

  const onDownClickListener = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    if (isMine) return;
    console.log('down click');
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
