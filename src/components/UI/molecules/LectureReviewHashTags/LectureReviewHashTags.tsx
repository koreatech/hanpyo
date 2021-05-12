/* eslint-disable react/no-array-index-key */
import React from 'react';
import { HashTag } from '@/components/UI/atoms';
import { makeStyles } from '@material-ui/core/styles';

interface LectureReviewHashTagsProps {
  tags: string[];
  isDetail?: boolean;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

const LectureReviewHashTags = ({ tags, isDetail = false }: LectureReviewHashTagsProps): JSX.Element => {
  const classes = useStyles();
  const getHashTags = () => {
    const tempTags = isDetail ? tags : tags.slice(0, 9);
    return tempTags.map((tag, idx) => {
      return <HashTag key={`${idx}${tag}`}>{tag}</HashTag>;
    });
  };
  return <div className={classes.root}>{getHashTags()}</div>;
};

export { LectureReviewHashTags };
export type { LectureReviewHashTagsProps };
