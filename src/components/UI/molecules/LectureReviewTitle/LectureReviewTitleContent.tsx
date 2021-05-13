import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Button, ButtonType } from '@/components/UI/atoms';

interface LectureReviewTitleContentProps {
  onWriteBtnClick: () => void;
}

const BUTTON_STYLE_PROPS = { width: 160, height: 36.3, borderRadius: 16, fontSize: 20.8 };

const useStyles = makeStyles({
  titleArea: {
    width: '100%',
    marginTop: '1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const LectureReviewTitleContent = ({ onWriteBtnClick }: LectureReviewTitleContentProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.titleArea}>
      <Typography variant="h4" color="primary">
        강의 후기
      </Typography>
      <Button btnType={ButtonType.primary} style={BUTTON_STYLE_PROPS} onClick={onWriteBtnClick}>
        강의 후기 쓰기
      </Button>
    </div>
  );
};

export { LectureReviewTitleContent };
export type { LectureReviewTitleContentProps };
