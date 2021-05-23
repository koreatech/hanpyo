import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { LectureBox, SameLectureBox } from '@/components/UI/atoms';
import { TimeTypes } from '@/components/UI/molecules';
import { useStores } from '@/stores';
import { useReactiveVar, useApolloClient } from '@apollo/client';
import { isString } from '@/common/utils/typeCheck';

import { LECTURE_INFOS } from '@/queries';

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
  const client = useApolloClient();
  const savedLectures = useReactiveVar(timeTableStore.state.selectedTabLectures);
  const selectedTabIdx = useReactiveVar(timeTableStore.state.selectedTabIdx);
  const nowSelectedLecture = useReactiveVar(lectureInfoStore.state.selectedLecture);

  const getLectureBoxes = () => {
    if (selectedTabIdx === 0) return <></>;

    const lectureInfos = savedLectures[selectedTabIdx - 1];
    if (!lectureInfos) return <></>;

    return lectureInfos.map((lectureInfo) => {
      if (isString(lectureInfo.lectureTimes)) return <></>;

      const times = lectureInfo.lectureTimes as TimeTypes[];

      if (!times) return [];

      return times.map((time) => {
        return (
          <LectureBox
            startTime={time.start}
            endTime={time.end}
            lectureName={lectureInfo.name}
            classNumber={lectureInfo.divisionNumber}
            professorName={lectureInfo.professor}
            bgcolor={lectureInfo.color}
          />
        );
      });
    });
  };

  const getSameLectureBoxes = () => {
    const { lectureInfos } = client.readQuery({ query: LECTURE_INFOS });
    const sameLectures = lectureInfoStore.getSameLectures(lectureInfos);

    return sameLectures.map((sameLecture) => {
      if (typeof sameLecture.lectureTimes === 'string') return <></>;

      if (!sameLecture.lectureTimes) return [];

      return sameLecture.lectureTimes.map((time) => {
        if (sameLecture.divisionNumber === nowSelectedLecture?.divisionNumber) {
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
