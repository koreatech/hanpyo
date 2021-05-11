import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import loading from '@/assets/loading.gif';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '35rem',
    height: '19rem',
    marginTop: '1.2rem',
    border: `1px solid ${theme.palette.grey[400]}`,
    borderRadius: '0.7rem',
  },
  img: {
    width: '3rem',
    height: '3rem',
    marginBottom: '0.8rem',
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
  },
}));

const randomMessages = [
  '원하는 키워드로 강의를 찾아보세요! (ex: "기계")',
  '강의 리뷰를 통해 다른 학생들에게 정보를 제공해보세요.',
  '건의 사항이 있으시면 아래 Contact 메뉴를 통해 전달해주세요.',
  '한표는 주기적으로 강의 정보를 업데이트 시키고 있습니다.',
  '기분이 우울할 때는 제이레빗의 "요즘 너 말야"를 들어보세요.',
  '오늘의 꿀팁 : 수강신청 한 번 망한다고 인생이 망하지는 않는답니다.',
  <>
    <p>빨리 읽기 챌린지</p>
    <p>저기있는 저 분은 박 법학박사이고, 여기있는 이 분은 백 법학박사이다.</p>
  </>,
  <>
    <p>빨리 읽기 챌린지</p>
    <p>내가 그린 기린 그림은 긴 기린 그림이고 니가 그린 기린 그림은 안 긴 기린 그림이다!</p>
  </>,
  <>
    <p>빨리 읽기 챌린지</p>
    <p>도토리가 문을 도로록, 드르륵, 두루룩 열었는가? 드로록, 도루륵, 두르룩 열었는가?</p>
  </>,
];

const LectureListSkeleton = () => {
  const classes = useStyles();

  const getRandomMessage = () => {
    return randomMessages[Math.floor(Math.random() * randomMessages.length)];
  };

  return (
    <div className={classes.root}>
      <img className={classes.img} src={loading} alt="loading animation" />
      <Typography variant="subtitle1">강의 정보를 불러오고 있습니다.</Typography>
      <Typography className={classes.text} variant="caption">
        {getRandomMessage()}
      </Typography>
    </div>
  );
};

export { LectureListSkeleton };
