import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LectureInfo, LectureInfos } from './LectureInfo/LectureInfo';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '35rem',
    height: '22.5rem',
    boxSizing: 'border-box',
    border: `1px solid ${theme.palette.grey[400]}`,
    borderRadius: '0.7rem',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      width: '0.3rem',
      display: 'none',
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
    name: '디자인커뮤니케이션',
    class: '01',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: '10:00-11:00',
  },
  {
    code: '111112',
    name: '디자인커뮤니케이션',
    class: '01',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: '10:00-11:00',
  },
  {
    code: '222222',
    name: '디자인커뮤니케이션',
    class: '01',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: '10:00-11:00',
  },
  {
    code: '333333',
    name: '디자인커뮤니케이션',
    class: '01',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: '10:00-11:00',
  },
  {
    code: '444444',
    name: '디자인커뮤니케이션',
    class: '01',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: '10:00-11:00',
  },
  {
    code: '555555',
    name: '디자인커뮤니케이션',
    class: '01',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: '10:00-11:00',
  },
  {
    code: '666666',
    name: '디자인커뮤니케이션',
    class: '01',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: '10:00-11:00',
  },
  {
    code: '777777',
    name: '디자인커뮤니케이션',
    class: '01',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: '10:00-11:00',
  },
  {
    code: 'HANPYs',
    name: '디자인커뮤니케이션',
    class: '01',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: '10:00-11:00',
  },
  {
    code: 'HANPYa',
    name: '디자인커뮤니케이션',
    class: '01',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: '10:00-11:00',
  },
  {
    code: 'HANPYb',
    name: '디자인커뮤니케이션',
    class: '01',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: '10:00-11:00',
  },
  {
    code: 'HANPYc',
    name: '디자인커뮤니케이션',
    class: '01',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: '10:00-11:00',
  },
  {
    code: 'HANPYd',
    name: '디자인커뮤니케이션',
    class: '01',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: '10:00-11:00',
  },
  {
    code: 'HANPYe',
    name: '디자인커뮤니케이션',
    class: '01',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: '10:00-11:00',
  },
  {
    code: 'HANPYf',
    name: '디자인커뮤니케이션',
    class: '01',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: '10:00-11:00',
  },
  {
    code: 'HANPYg',
    name: '디자인커뮤니케이션',
    class: '01',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: '10:00-11:00',
  },
  {
    code: 'HANPYh',
    name: '디자인커뮤니케이션',
    class: '01',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: '10:00-11:00',
  },
  {
    code: 'HANPYi',
    name: '디자인커뮤니케이션',
    class: '01',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: '10:00-11:00',
  },
  {
    code: 'HANPYO',
    name: '디자인커뮤니케이션',
    class: '01',
    prof: '윤정식',
    grade: '03',
    personnel: '25',
    dept: '디자인건축공학부',
    time: '10:00-11:00',
  },
];

const SearchResults = (): JSX.Element => {
  const classes = useStyles();
  const fillInfos = (infos: Array<LectureInfos>) => {
    return infos.map((elem: LectureInfos) => {
      return <LectureInfo infos={elem} />;
    });
  };
  return (
    <Box className={classes.root}>
      <LectureInfo isHeader infos={headerInfos} />
      <Box className={classes.itemWrapper}>{fillInfos(testData)}</Box>
    </Box>
  );
};

export { SearchResults };
