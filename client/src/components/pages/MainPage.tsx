import React from 'react';
import { AlertSnackbar } from '@/components/UI/atoms';
import { Timetable, Notice, SearchBar, SubTitle, LectureSearchFilterMenu, TimeTableAddForm } from '@/components/UI/molecules';
import { makeStyles } from '@material-ui/core';
import { LectureList, ModalPopup, TimeTableMenu } from '@/components/UI/organisms';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  wrapper: {
    display: 'flex',
    width: '80rem',
    minHeight: '1000px',
    justifyContent: 'space-around',
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '35rem',
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '35rem',
  },
});

const MainPage = (): JSX.Element => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <div className={classes.left}>
            <Notice />
            <TimeTableMenu />
            <Timetable row={10} containedSat={false} />
          </div>
          <div className={classes.right}>
            <SubTitle>강의 찾기</SubTitle>
            <SearchBar />
            <LectureSearchFilterMenu />
            <LectureList />
            <SubTitle>나만의 스케줄 추가</SubTitle>
            <TimeTableAddForm />
            <SubTitle>장바구니</SubTitle>
            <LectureList isBasketList />
          </div>
        </div>
        <AlertSnackbar />
        <ModalPopup />
      </div>
    </>
  );
};

export default MainPage;
