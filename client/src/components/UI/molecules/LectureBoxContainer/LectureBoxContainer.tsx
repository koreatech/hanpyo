import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LectureBox } from '@/components/UI/atoms';
import { useStores } from '@/stores';
import { useReactiveVar } from '@apollo/client';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
}));

const LectureBoxContainer = (): JSX.Element => {
  const classes = useStyles();
  const { timeTableStore } = useStores();
  const lectures = useReactiveVar(timeTableStore.state.lectures);
  const selectedTabIdx = useReactiveVar(timeTableStore.state.selectedTabIdx);

  const fillTableByLectures = () => {
    if (selectedTabIdx === 0) return <></>;
    const lectureInfos = lectures[selectedTabIdx - 1];
    if (!lectureInfos) return <></>;
    return lectureInfos.map((elem) => {
      if (typeof elem.time === 'string') return <></>;
      return elem.time.map((time) => {
        return <LectureBox starttime={time.start} endtime={time.end} name={elem.name} division={elem.class} prof={elem.prof} />;
      });
    });
  };

  return <Box className={classes.root}>{fillTableByLectures()}</Box>;
};

export { LectureBoxContainer };
