import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
import StarHalf from '@material-ui/icons/StarHalf';

interface LectureReviewRatingProps {
  rating: number;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginLeft: '0.5rem',
  },
}));

const LectureReviewRating = ({ rating }: LectureReviewRatingProps): JSX.Element => {
  const classes = useStyles();
  const getStars = () => {
    const array = [];
    const Stars = Math.floor(rating);
    const isHalfStar = !!(rating - Stars);
    const borderStars = isHalfStar ? 4 - Stars : 5 - Stars;
    for (let i = 0; i < Stars; i++) array.push(<Star key={`S${i}`} fontSize="small" color="primary" />);
    if (isHalfStar) array.push(<StarHalf key="SH" fontSize="small" color="primary" />);
    for (let i = 0; i < borderStars; i++) array.push(<StarBorder key={`BS${i}`} fontSize="small" color="primary" />);
    return array;
  };

  return <div className={classes.root}>{getStars()}</div>;
};

export { LectureReviewRating };
export type { LectureReviewRatingProps };
