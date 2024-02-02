import React from 'react';
import { AlertSnackbar } from '@/components/UI/atoms';
import { Timetable, Notice, LectureSearchBar, SubTitle, LectureSearchFilterMenu, TimeTableAddForm } from '@/components/UI/molecules';
import { makeStyles } from '@material-ui/core';
import { LectureList, ModalPopup, TimeTableMenu, Footer } from '@/components/UI/organisms';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
    width: '43rem',
  },
  marginTop: {
    width: '100%',
    marginTop: '1rem',
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
            <div className={classes.marginTop}>
              <LectureSearchBar />
            </div>
            <LectureSearchFilterMenu />
            <LectureList />
            <SubTitle>나만의 스케줄 추가</SubTitle>
            <TimeTableAddForm />
            <SubTitle>장바구니</SubTitle>
            <LectureList isBasket />
          </div>
        </div>
        <Footer />
        <AlertSnackbar />
        <ModalPopup />
      </div>
    </>
  );
};

export default MainPage;
