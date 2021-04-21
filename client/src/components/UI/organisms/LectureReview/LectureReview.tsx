import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  LectureReviewInfo,
  LectureReviewThumbs,
  LectureReviewHashTags,
  LectureReviewInfoProps,
  LectureReviewThumbsProps,
} from '@/components/UI/molecules';

interface LectureReviewProps {
  infos: LectureReviewInfoProps;
  content: string;
  tags: string[];
  scores: LectureReviewThumbsProps;
  isMine?: boolean;
}

interface CSSProps {
  isMine: boolean;
}

const useStyles = makeStyles((theme) => ({
  root: ({ isMine }: CSSProps) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '40rem',
    height: '9rem',
    border: `1px solid ${isMine ? theme.palette.primary.main : theme.palette.grey[300]}`,
    backgroundColor: isMine ? '#fdf6eb' : 'white',
    borderRadius: '0.5rem',
    padding: '1rem',
    marginBottom: '1rem',
  }),
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '25%',
  },
  body: {
    height: '45%',
  },
  content: {
    overflow: 'hidden',
    lineHeight: 1.2,
    textAlign: 'left',
    height: '3.6rem',
    textOverFlow: 'ellipsis',
    display: '-webkit-box',
    '&::-webkit-line-clamp': 3,
    '&::-webkit-box-orient': 'vertical',
    wordWrap: 'break-word',
    whiteSpace: 'normal',
  },
  bottom: {
    height: '20%',
  },
}));

const LectureReview = ({ infos, content, tags, scores, isMine = false }: LectureReviewProps): JSX.Element => {
  const classes = useStyles({ isMine });

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <LectureReviewInfo lectureName={infos.lectureName} profName={infos.profName} rating={infos.rating} period={infos.period} />
        <LectureReviewThumbs upScore={scores.upScore} downScore={scores.downScore} />
      </div>
      <div className={classes.content}>{content}</div>
      <div className={classes.bottom}>
        <LectureReviewHashTags tags={tags} />
      </div>
    </div>
  );
};

export { LectureReview };
