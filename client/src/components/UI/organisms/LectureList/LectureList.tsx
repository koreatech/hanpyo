/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SnackbarType } from '@/components/UI/atoms';
import { LectureInfo, LectureInfos, BasketLectureListBody, SearchedLectureListBody } from '@/components/UI/molecules';
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

const LectureList = ({ isBasketList = false }: LectureListProps): JSX.Element => {
  const classes = useStyles({ isBasketList });

  const { timeTableStore, snackbarStore } = useStores();
  const onLectureSearchClickListener = (lectureInfos: LectureInfos) => {
    if (typeof lectureInfos.time === 'string') return;
    timeTableStore.addLectureToTable(lectureInfos);
    snackbarStore.setSnackbarType(SnackbarType.ADD_SUCCESS);
    snackbarStore.setSnackbarState(true);
  };
  const onBasketLectureClickListener = (lectureInfos: LectureInfos) => {
    if (typeof lectureInfos.time === 'string') return;
    timeTableStore.removeLectureFromTable(lectureInfos.name);
    snackbarStore.setSnackbarType(SnackbarType.DELETE_SUCCESS);
    snackbarStore.setSnackbarState(true);
  };
  const getLectureInfos = (infos: Array<LectureInfos>) => {
    if (!infos) return <></>;
    return infos.map((elem: LectureInfos) => {
      return (
        <LectureInfo infos={elem} onClick={isBasketList ? onBasketLectureClickListener : onLectureSearchClickListener} isBasketList={isBasketList} />
      );
    });
  };

  const getLectureBody = () => {
    return isBasketList ? (
      <BasketLectureListBody isBasketList={isBasketList} getLectureInfos={getLectureInfos} />
    ) : (
      <SearchedLectureListBody isBasketList={isBasketList} getLectureInfos={getLectureInfos} />
    );
  };

  return (
    <Box className={classes.rootWrapper}>
      <Box className={classes.root}>
        <LectureInfo isHeader infos={headerInfos} onClick={() => {}} />
        {getLectureBody()}
      </Box>
    </Box>
  );
};

export { LectureList };
export type { LectureListProps };
