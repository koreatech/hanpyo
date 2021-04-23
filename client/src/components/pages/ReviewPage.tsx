/* eslint-disable react/no-array-index-key */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { ReviewSearchSection } from '@/components/UI/molecules';
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
    width: '100%',
    marginTop: '1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchArea: {
    display: 'flex',
    width: '100%',
    marginTop: '1.5rem',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  writeButton: {
    width: '10rem',
    padding: '2rem, 1rem',
    '& > span': {
      fontSize: '1.3rem',
    },
    borderRadius: '1rem',
  },
}));

const ReviewPage = (): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.wrapper}>
        <div className={classes.titleArea}>
          <Typography variant="h4" color="primary">
            강의 후기
          </Typography>
          <Button className={classes.writeButton} variant="contained" color="primary">
            강의 후기 쓰기
          </Button>
        </div>
        <div className={classes.searchArea}>
          <ReviewSearchSection />
        </div>
        <LectureReviewContainer />
      </div>
    </div>
  );
};

export default ReviewPage;
