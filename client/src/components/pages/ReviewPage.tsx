/* eslint-disable react/no-array-index-key */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Header, LectureReviewContainer } from '@/components/UI/organisms';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '40rem',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleArea: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  searchArea: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

const ReviewPage = (): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.wrapper}>
        <div className={classes.titleArea}>타이틀 영역</div>
        <div className={classes.searchArea}>검색 영역</div>
        <LectureReviewContainer />
      </div>
    </div>
  );
};

export default ReviewPage;
