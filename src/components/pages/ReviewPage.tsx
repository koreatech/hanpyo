import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ReviewSearchSection, LectureReviewTitle } from '@/components/UI/molecules';
import { LectureReviewContainer, ModalPopup } from '@/components/UI/organisms';

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
    alignItems: 'center',
    minHeight: '1000px',
  },
  searchArea: {
    display: 'flex',
    width: '100%',
    marginTop: '1.5rem',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const ReviewPage = (): JSX.Element => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <LectureReviewTitle />
          <div className={classes.searchArea}>
            <ReviewSearchSection />
          </div>
          <LectureReviewContainer />
        </div>
      </div>
      <ModalPopup />
    </>
  );
};

export default ReviewPage;
