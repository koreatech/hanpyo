import React from 'react';
import { Button, DialogTitle, DialogContent, DialogActions, Typography, Divider } from '@material-ui/core';
import Close from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import { LectureReviewRating } from '@/components/UI/atoms';
import { LectureReviewThumbs, LectureReviewHashTags } from '@/components/UI/molecules';
import { LectureReviewData } from '@/components/UI/organisms';

enum ReviewDetailModalType {
  REVIEW_DETAIL_MODAL = 'REVIEW_DETAIL_MODAL',
}

interface ReviewDetailModalContentProps {
  data: LectureReviewData;
  isMine?: boolean;
  onModalClose: () => void;
  onModalModifyBtnClick: () => void;
  onModalDeleteBtnClick: () => void;
}

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'flex',
    flexDirection: 'column',
  },
  titleTopArea1: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleTopArea2: {
    display: 'flex',
    width: '40%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  normalFlexBox: {
    display: 'flex',
  },
  closeBtn: {
    color: theme.palette.grey[400],
    '&:hover': {
      cursor: 'pointer',
      opacity: 0.7,
    },
  },
  action: {
    display: 'flex',
    flexDirection: 'column',
  },
  actionThumbs: {
    marginLeft: 'auto',
  },
  actionButtons: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  },
  modifyButton: {
    backgroundColor: theme.palette.primary.main,
    width: '45%',
    color: 'white',
    borderRadius: '1rem',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      opacity: 0.7,
    },
  },
  deleteButton: {
    width: '45%',
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '1rem',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      opacity: 0.7,
    },
  },
  divider: {
    margin: '0 0.5rem',
  },
}));

const ReviewDetailModalContent = ({
  data,
  isMine = false,
  onModalClose,
  onModalModifyBtnClick,
  onModalDeleteBtnClick,
}: ReviewDetailModalContentProps): JSX.Element => {
  const classes = useStyles();

  return (
    <>
      <DialogTitle className={classes.title} id="login-dialog-title" disableTypography>
        <div className={classes.titleTopArea1}>
          <div className={classes.titleTopArea2}>
            <Typography variant="h6">{data.infos.lectureName}</Typography>
            <Typography>{data.infos.profName}</Typography>
          </div>
          <Close className={classes.closeBtn} onClick={onModalClose} />
        </div>
        <div className={classes.normalFlexBox}>
          <Typography variant="caption">{data.infos.period}</Typography>
          <Divider className={classes.divider} orientation="vertical" flexItem />
          <Typography variant="caption">작성 날짜</Typography>
        </div>
        <div className={classes.normalFlexBox}>
          <Typography>평점</Typography>
          <LectureReviewRating rating={data.infos.rating} />
        </div>
        <div>
          <LectureReviewHashTags tags={data.tags} />
        </div>
      </DialogTitle>
      <DialogContent>
        <Typography variant="body2">{data.content}</Typography>
      </DialogContent>
      <DialogActions className={classes.action}>
        <div className={classes.actionThumbs}>
          <LectureReviewThumbs upScore={data.scores.upScore} downScore={data.scores.downScore} detail />
        </div>
        {isMine && (
          <div className={classes.actionButtons}>
            <Button className={classes.modifyButton} onClick={onModalModifyBtnClick}>
              수 정
            </Button>
            <Button className={classes.deleteButton} onClick={onModalDeleteBtnClick}>
              삭 제
            </Button>
          </div>
        )}
      </DialogActions>
    </>
  );
};

export { ReviewDetailModalContent, ReviewDetailModalType };
export type { ReviewDetailModalContentProps };
