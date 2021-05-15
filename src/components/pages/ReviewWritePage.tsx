import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LectureReviewWriteForm } from '@/components/UI/organisms';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '40rem',
    minHeight: '1000px',
    marginTop: '1.5rem',

    '& > *:first-child': {
      marginBottom: '0.5rem',
    },
  },
});

const ReviewWritePage = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Typography variant="h4" color="primary">
          강의 후기 쓰기
        </Typography>
        <LectureReviewWriteForm />
      </div>
    </div>
  );
};

export default ReviewWritePage;
