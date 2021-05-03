/* eslint-disable react/no-array-index-key */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useReactiveVar } from '@apollo/client';
import { useStores } from '@/stores';
import { modalTypes } from '@/components/UI/organisms';
import { LectureReview } from './LectureReview';

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginTop: '1.5rem',
  },
});

const LectureReviewContainer = (): JSX.Element => {
  const classes = useStyles();
  const { lectureReviewStore, modalStore } = useStores();
  const reviews = useReactiveVar(lectureReviewStore.state.reviews);

  const onClickListener = (event: React.MouseEvent<HTMLElement>, ref: HTMLSpanElement | null) => {
    if (!ref) return;
    const { dataset } = ref;
    lectureReviewStore.state.nowSelectedReviewId(Number(dataset?.id));
    modalStore.changeModalState(modalTypes.REVIEW_DETAIL_MODAL, true);
  };

  const checkIsMine = () => {
    // LectureReview의 writer와 서버로부터 받아온 내 닉네임을 비교하여 true/false 반환
    // 클라이언트에서 닉네임을 관리하게 될 경우 문제가 생길 수 있을 것 같음
    // 클라이언트에서 닉네임을 악의적으로 바꿔 글을 수정하는 것을 방지하기 위해 서버에서 한 번 더 검사하면 좋을 듯
  };
  const getLectureReviews = () => {
    return reviews.map((review, idx) => {
      return <LectureReview key={idx} data={review} onClick={onClickListener} />;
    });
  };
  return <div className={classes.root}>{getLectureReviews()}</div>;
};

export { LectureReviewContainer };
