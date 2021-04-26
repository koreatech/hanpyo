import React from 'react';
import { HashTag } from '@/components/UI/atoms';
import { makeStyles } from '@material-ui/core/styles';

interface LectureReviewHashTagsProps {
  tags: string[];
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

const LectureReviewHashTags = ({ tags }: LectureReviewHashTagsProps): JSX.Element => {
  const classes = useStyles();
  const getHashTags = () => {
    return tags.map((tag) => {
      return <HashTag key={tag}>{tag}</HashTag>;
    });
  };
  return <div className={classes.root}>{getHashTags()}</div>;
};

export { LectureReviewHashTags };
export type { LectureReviewHashTagsProps };
