import React, { useState, useEffect } from 'react';
import { Button, DialogTitle, DialogContent, DialogActions, Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LectureReviewData } from '@/components/UI/organisms';

enum ReviewDetailModalType {
  REVIEW_DETAIL_MODAL = 'REVIEW_DETAIL_MODAL',
}

interface ReviewDetailModalContentProps {
  data: LectureReviewData;
  isMine?: boolean;
  onModalClose: () => void;
}

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

const ReviewDetailModalContent = ({ data, isMine = false, onModalClose }: ReviewDetailModalContentProps): JSX.Element => {
  const classes = useStyles();

  return (
    <>
      <DialogTitle className={classes.title} id="login-dialog-title" disableTypography>
        <div>
          <Typography>{data.infos.lectureName}</Typography>
          <Typography>{data.infos.profName}</Typography>
        </div>
        <div>
          <Typography>{data.infos.period}</Typography>
          <Divider orientation="horizontal" />
          <Typography>날짜</Typography>
        </div>
      </DialogTitle>
      <DialogContent>내용</DialogContent>
      <DialogActions>
        <Button onClick={onModalClose} color="primary">
          로그인
        </Button>
      </DialogActions>
    </>
  );
};

export { ReviewDetailModalContent, ReviewDetailModalType };
export type { ReviewDetailModalContentProps };
