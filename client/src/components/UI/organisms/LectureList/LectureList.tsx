import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SnackbarType } from '@/components/UI/atoms';
import { LectureInfo, LectureInfos } from '@/components/UI/molecules';
import { useReactiveVar } from '@apollo/client';
import { addLectureToTable, removeLectureFromTable, lectures, nowSelectedTab } from '@/stores/timetable';
import { useStores } from '@/stores';

interface LectureListProps {
  isBasketList?: boolean;
}

interface CSSProps {
  isBasketList?: boolean;
}

const useStyles = makeStyles((theme) => ({
  rootWrapper: {
    width: '35rem',
    height: (props: CSSProps) => (props.isBasketList ? '12rem' : '19rem'),
    margin: '1.2rem 0 0 0',
    padding: '0 0.2rem 0.4rem 0.2rem',
    boxSizing: 'border-box',
    border: `1px solid ${theme.palette.grey[400]}`,
    borderRadius: '0.7rem',
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    alignItems: 'center',
  },
  itemWrapper: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '0.25rem',
    width: '100%',
    alignItems: 'center',
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      width: '0.3rem',
      display: 'block',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.grey[300],
      borderRadius: '0.7rem',
    },
  },
}));

const headerInfos = {
  code: '코드',
  name: '강의명',
  class: '분반',
  prof: '교수님',
  grade: '대상',
  personnel: '정원',
  dept: '개설학부',
  time: '시간',
};

const testData = [
  {
    code: '111111',
    name: '리눅스의 기초',
    class: '01',
    prof: '도눅스',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: [
      { start: 3690, end: 3720 },
      { start: 540, end: 600 },
    ],
  },
  {
    code: '111112',
    name: '신과함께',
    class: '01',
    prof: '갓우진',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: [{ start: 2340, end: 2460 }],
  },
  {
    code: '222222',
    name: '백엔드 심화과정',
    class: '01',
    prof: '백마',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: [{ start: 5100, end: 5160 }],
  },
  {
    code: '333333',
    name: '허접한 진혀쿠',
    class: '01',
    prof: '지녀쿠',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: [{ start: 5400, end: 5520 }],
  },
  {
    code: '444444',
    name: '디자인커뮤니케이션',
    class: '01',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: [{ start: 3660, end: 3780 }],
  },
  {
    code: '555555',
    name: '디자인커뮤니케이션',
    class: '01',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: [{ start: 3660, end: 3780 }],
  },
  {
    code: '666666',
    name: '디자인커뮤니케이션',
    class: '01',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: [{ start: 3660, end: 3780 }],
  },
  {
    code: '777777',
    name: '디자인',
    class: '01',
    prof: '정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: [{ start: 3660, end: 3780 }],
  },
  {
    code: 'HANPYs',
    name: '디자인커뮤니케이션',
    class: '01',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: [{ start: 3660, end: 3780 }],
  },
  {
    code: 'HANPYa',
    name: '디자인커뮤니케이션',
    class: '01',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: [{ start: 3660, end: 3780 }],
  },
  {
    code: 'HANPYb',
    name: '디자인커뮤니케이션',
    class: '01',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: [{ start: 3660, end: 3780 }],
  },
  {
    code: 'HANPYc',
    name: '디자인커뮤니케이션',
    class: '01',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: [{ start: 3660, end: 3780 }],
  },
  {
    code: 'HANPYd',
    name: '디자인커뮤니케이션',
    class: '01',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: [{ start: 3660, end: 3780 }],
  },
  {
    code: 'HANPYe',
    name: '디자인커뮤니케이션',
    class: '01',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: [{ start: 3660, end: 3780 }],
  },
  {
    code: 'HANPYf',
    name: '디자인커뮤니케이션',
    class: '01',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: [{ start: 3660, end: 3780 }],
  },
  {
    code: 'HANPYg',
    name: '디자인커뮤니케이션',
    class: '01',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: [{ start: 3660, end: 3780 }],
  },
  {
    code: 'HANPYh',
    name: '디자인커뮤니케이션',
    class: '01',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: [{ start: 3660, end: 3780 }],
  },
  {
    code: 'HANPYi',
    name: '디자인커뮤니케이션',
    class: '01',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: [{ start: 3660, end: 3780 }],
  },
  {
    code: 'HANPYO',
    name: '디자인커뮤니케이션',
    class: '01',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: [{ start: 3660, end: 3780 }],
  },
];

const LectureList = ({ isBasketList = false }: LectureListProps): JSX.Element => {
  const classes = useStyles({ isBasketList });
  const { snackbarStore } = useStores();
  const savedLectures = useReactiveVar(lectures);
  const selectedTabIdx = useReactiveVar(nowSelectedTab);
  const savedLecturesInSelectedTab = savedLectures[selectedTabIdx - 1];

  const fillLectureInfos = (infos: Array<LectureInfos>) => {
    return infos.map((elem: LectureInfos) => {
      return (
        <LectureInfo infos={elem} onClick={isBasketList ? onBasketLectureClickListener : onLectureSearchClickListener} isBasketList={isBasketList} />
      );
    });
  };

  const onLectureSearchClickListener = (lectureInfos: LectureInfos) => {
    if (typeof lectureInfos.time === 'string') return;
    addLectureToTable(lectureInfos);
    snackbarStore.setSnackbarType(SnackbarType.ADD_SUCCESS);
    snackbarStore.setSnackbarState(true);
  };

  const onBasketLectureClickListener = (lectureInfos: LectureInfos) => {
    if (typeof lectureInfos.time === 'string') return;
    removeLectureFromTable(lectureInfos.name);
    snackbarStore.setSnackbarType(SnackbarType.DELETE_SUCCESS);
    snackbarStore.setSnackbarState(true);
  };

  return (
    <Box className={classes.rootWrapper}>
      <Box className={classes.root}>
        <LectureInfo isHeader infos={headerInfos} onClick={onLectureSearchClickListener} />
        <Box className={classes.itemWrapper}>{fillLectureInfos(isBasketList ? savedLecturesInSelectedTab : testData)}</Box>
      </Box>
    </Box>
  );
};

export { LectureList };
export type { LectureListProps };
