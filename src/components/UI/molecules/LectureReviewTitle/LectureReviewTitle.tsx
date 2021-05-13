import React from 'react';
import { useHistory } from 'react-router-dom';
import { LectureReviewTitleContent } from './LectureReviewTitleContent';

const LectureReviewTitle = (): JSX.Element => {
  const history = useHistory();

  const onWriteBtnClickListener = () => {
    history.push('/reviewWrite');
  };

  return <LectureReviewTitleContent onWriteBtnClick={onWriteBtnClickListener} />;
};

export { LectureReviewTitle };
