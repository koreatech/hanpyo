import React from 'react';
import { AlertSnackbar } from '@/components/UI/atoms';
import { Timetable, Notice, SearchBar, SubTitle, LectureSearchFilterMenu, TimeTableAddForm } from '@/components/UI/molecules';
import { Box, makeStyles } from '@material-ui/core';
import { Header, LectureList, ModalPopup, TimeTableMenu } from '@/components/UI/organisms';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  wrapper: {
    display: 'flex',
    width: '80rem',
    justifyContent: 'space-around',
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '35rem',
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    width: '35rem',
  },
});

const MainPage = (): JSX.Element => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <Header />
        <Box className={classes.wrapper}>
          <Box className={classes.left}>
            <Notice />
            <TimeTableMenu />
            <Timetable row={10} containedSat={false} />
          </Box>
          <Box className={classes.right}>
            <SubTitle>강의 찾기</SubTitle>
            <SearchBar />
            <LectureSearchFilterMenu />
            <LectureList />
            <SubTitle>나만의 스케줄 추가</SubTitle>
            <TimeTableAddForm />
            <SubTitle>장바구니</SubTitle>
            <LectureList isBasketList />
          </Box>
        </Box>
        <AlertSnackbar />
        <ModalPopup />
      </Box>
    </>
  );
};

export default MainPage;
