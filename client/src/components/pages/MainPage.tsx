import React from 'react';
import { AlertSnackbar } from '@/components/UI/atoms';
import { Timetable, Notice, SelectTab, SearchBar, SubTitle } from '@/components/UI/molecules';
import { LectureList, Header } from '@/components/UI/organisms';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
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
}));

const MainPage = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Header />
      <Box className={classes.wrapper}>
        <Box className={classes.left}>
          <Notice />
          <SelectTab />
          <Timetable row={10} containedSat={false} />
        </Box>
        <Box className={classes.right}>
          <SubTitle>강의 찾기</SubTitle>
          <SearchBar />
          <LectureList />
          <SubTitle>나만의 스케줄 추가</SubTitle>
          <SubTitle>장바구니</SubTitle>
          <LectureList isBasketList />
        </Box>
      </Box>
      <AlertSnackbar />
    </Box>
  );
};

export default MainPage;
