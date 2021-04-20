import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { LectureBox, SameLectureBox } from '@/components/UI/atoms';
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
  const { timeTableStore, lectureInfoStore } = useStores();
  const savedLectures = useReactiveVar(timeTableStore.state.selectedTabLectures);
  const selectedTabIdx = useReactiveVar(timeTableStore.state.selectedTabIdx);
  const nowSelectedLecture = useReactiveVar(lectureInfoStore.state.selectedLecture);

  const fillTableByLectures = () => {
    if (selectedTabIdx === 0) return <></>;
    const lectureInfos = savedLectures[selectedTabIdx - 1];
    if (!lectureInfos) return <></>;
    return lectureInfos.map((elem) => {
      if (typeof elem.time === 'string') return <></>;
      return elem.time.map((time) => {
        return <LectureBox startTime={time.start} endTime={time.end} name={elem.name} division={elem.class} prof={elem.prof} bgcolor={elem.color} />;
      });
    });
  };

  const showSameLectures = () => {
    const sameLectures = lectureInfoStore.getSameLectures();
    return sameLectures.map((sameLecture) => {
      if (typeof sameLecture.time === 'string') return <></>;
      return sameLecture.time.map((time) => {
        if (sameLecture.class === nowSelectedLecture?.class) return <SameLectureBox startTime={time.start} endTime={time.end} nowSelected />;
        return <SameLectureBox startTime={time.start} endTime={time.end} />;
      });
    });
  };
  return (
    <div className={classes.root}>
      {fillTableByLectures()}
      {showSameLectures()}
    </div>
  );
};

export { LectureBoxContainer };
