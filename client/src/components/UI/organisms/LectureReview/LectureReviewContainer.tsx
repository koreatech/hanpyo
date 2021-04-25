/* eslint-disable react/no-array-index-key */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { LectureReview } from './LectureReview';

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginTop: '1.5rem',
  },
});

const mockData = [
  {
    infos: {
      lectureName: '디자인커뮤니케이션',
      profName: '윤정식',
      rating: 3.5,
      period: '2020년도 2학기',
    },
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam. 안녕하세요 제 이름은 지녀쿠입니다. 한기대학생이 아니지만 한표를 만들고 있답니다 하하',
    tags: ['꿀수업', '진혀쿠', '돔황챠'],
    scores: {
      upScore: 20,
      downScore: 3,
    },
  },
  {
    infos: {
      lectureName: '취준하며놀고먹기',
      profName: '진혀쿠',
      rating: 1.5,
      period: '2021년도 1학기',
    },
    content: '취준하면서 놀고 먹고 싶다구요? 저처럼 공부를 안 하면 된답니다!',
    tags: ['백수', '진혀쿠', '나처럼살지마'],
    scores: {
      upScore: 5,
      downScore: 18,
    },
    isMine: true,
  },
  {
    infos: {
      lectureName: '디자인커뮤니케이션',
      profName: '윤정식',
      rating: 4,
      period: '2020년도 2학기',
    },
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam. 안녕하세요 제 이름은 지녀쿠입니다. 한기대학생이 아니지만 한표를 만들고 있답니다 하하',
    tags: ['꿀수업', '진혀쿠', '돔황챠'],
    scores: {
      upScore: 20,
      downScore: 3,
    },
  },
];

const LectureReviewContainer = (): JSX.Element => {
  const classes = useStyles();
  const getLectureReviews = () => {
    return mockData.map((data, idx) => {
      return <LectureReview key={idx} infos={data.infos} content={data.content} tags={data.tags} scores={data.scores} isMine={data.isMine} />;
    });
  };
  return <div className={classes.root}>{getLectureReviews()}</div>;
};

export { LectureReviewContainer };
