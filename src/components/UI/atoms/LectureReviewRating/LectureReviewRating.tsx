import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
import StarHalf from '@material-ui/icons/StarHalf';
import { range } from '@/common/utils';

interface LectureReviewRatingProps {
  rating: number;
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    marginLeft: '0.5rem',
  },
  star: {
    cursor: 'pointer',
  },
});

const LectureReviewRating = ({ rating }: LectureReviewRatingProps): JSX.Element => {
  const classes = useStyles();

  const getStars = () => {
    const numOfStars = Math.floor(rating);
    const hasHalfStar = !!(rating - numOfStars);
    const stars = Array.from(range(1, 5)).map((num, idx) => {
      if (idx < numOfStars) return <Star className={classes.star} key={num} fontSize="small" color="primary" />;
      if (idx === numOfStars && hasHalfStar) return <StarHalf className={classes.star} key={num} fontSize="small" color="primary" />;
      return <StarBorder className={classes.star} key={num} fontSize="small" color="primary" />;
    });

    return stars;
  };

  return <div className={classes.root}>{getStars()}</div>;
};

export { LectureReviewRating };
export type { LectureReviewRatingProps };
