/* eslint-disable react/no-array-index-key */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useReactiveVar } from '@apollo/client';
import { useStores } from '@/stores';
import { LectureReview } from './LectureReview';

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginTop: '1.5rem',
  },
});

const LectureReviewContainer = (): JSX.Element => {
  const classes = useStyles();
  const { lectureReviewStore } = useStores();
  const reviews = useReactiveVar(lectureReviewStore.state.reviews);

  const getLectureReviews = () => {
    return reviews.map((review, idx) => {
      return (
        <LectureReview key={idx} infos={review.infos} content={review.content} tags={review.tags} scores={review.scores} isMine={review.isMine} />
      );
    });
  };
  return <div className={classes.root}>{getLectureReviews()}</div>;
};

export { LectureReviewContainer };
