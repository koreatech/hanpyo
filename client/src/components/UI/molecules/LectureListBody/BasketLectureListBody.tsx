import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LectureInfos } from '@/components/UI/molecules';
import { useReactiveVar } from '@apollo/client';
import { useStores } from '@/stores';

interface BasketLectureListBodyProps {
  isBasketList?: boolean;
  getLectureInfos: (infos: Array<LectureInfos>) => any;
}

const useStyles = makeStyles((theme) => ({
  root: {
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

const BasketLectureListBody = ({ isBasketList = false, getLectureInfos }: BasketLectureListBodyProps): JSX.Element => {
  const classes = useStyles({ isBasketList });
  const { timeTableStore } = useStores();
  const savedLectures = useReactiveVar(timeTableStore.state.lectures);
  const selectedTabIdx = useReactiveVar(timeTableStore.state.selectedTabIdx);
  const savedLecturesInSelectedTab = savedLectures[selectedTabIdx - 1];

  return <Box className={classes.root}>{getLectureInfos(savedLecturesInSelectedTab)}</Box>;
};

export { BasketLectureListBody };
