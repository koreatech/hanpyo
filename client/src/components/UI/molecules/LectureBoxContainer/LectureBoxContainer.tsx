import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { LectureBox, SameLectureBox } from '@/components/UI/atoms';
import { useStores } from '@/stores';
import { useReactiveVar } from '@apollo/client';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
});

const LectureBoxContainer = (): JSX.Element => {
  const classes = useStyles();
  const { timeTableStore, lectureInfoStore } = useStores();
  const savedLectures = useReactiveVar(timeTableStore.state.selectedTabLectures);
  const selectedTabIdx = useReactiveVar(timeTableStore.state.selectedTabIdx);
  const nowSelectedLecture = useReactiveVar(lectureInfoStore.state.selectedLecture);

  const getLectureBoxes = () => {
    if (selectedTabIdx === 0) return <></>;

    const lectureInfos = savedLectures[selectedTabIdx - 1];
    if (!lectureInfos) return <></>;

    return lectureInfos.map((lectureInfo) => {
      if (typeof lectureInfo.time === 'string') return <></>;

      return lectureInfo.time.map((time) => {
        return (
          <LectureBox
            startTime={time.start}
            endTime={time.end}
            lectureName={lectureInfo.name}
            classNumber={lectureInfo.class}
            professorName={lectureInfo.prof}
            bgcolor={lectureInfo.color}
          />
        );
      });
    });
  };

  const getSameLectureBoxes = () => {
    const sameLectures = lectureInfoStore.getSameLectures();

    return sameLectures.map((sameLecture) => {
      if (typeof sameLecture.time === 'string') return <></>;

      return sameLecture.time.map((time) => {
        if (sameLecture.class === nowSelectedLecture?.class) {
          return <SameLectureBox startTime={time.start} endTime={time.end} isSelectedLecture />;
        }
        return <SameLectureBox startTime={time.start} endTime={time.end} />;
      });
    });
  };

  return (
    <div className={classes.root}>
      {getLectureBoxes()}
      {getSameLectureBoxes()}
    </div>
  );
};

export { LectureBoxContainer };
