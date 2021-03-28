import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LectureInfo, LectureInfos } from '@/components/UI/molecules';

interface LectureListProps {
  isBasketList?: boolean;
  lectures: Array<LectureInfos>;
  onClick: (lectureInfos: LectureInfos) => void;
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

const LectureList = ({ isBasketList = false, lectures, onClick }: LectureListProps): JSX.Element => {
  const classes = useStyles({ isBasketList });

  const fillLectureInfos = (infos: Array<LectureInfos>) => {
    if (!infos) return <></>;
    return infos.map((elem: LectureInfos) => {
      return <LectureInfo infos={elem} onClick={onClick} isBasketList={isBasketList} />;
    });
  };

  return (
    <Box className={classes.rootWrapper}>
      <Box className={classes.root}>
        <LectureInfo isHeader infos={headerInfos} onClick={onClick} />
        <Box className={classes.itemWrapper}>{fillLectureInfos(lectures)}</Box>
      </Box>
    </Box>
  );
};

export { LectureList };
export type { LectureListProps };
