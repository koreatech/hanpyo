import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

interface SameLectureBoxProps {
  startTime: number;
  endTime: number;
  isSelectedLecture?: boolean;
}

interface CSSProps {
  columnPos: number;
  rowStartPos: number;
  rowEndPos: number;
  isSelectedLecture?: boolean;
}

const useStyles = makeStyles((theme) => ({
  root: ({ columnPos, rowStartPos, rowEndPos, isSelectedLecture }: CSSProps) => ({
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    height: rowStartPos * 2 + rowEndPos * 2 <= 40 ? `${rowEndPos * 2}rem` : '4rem',
    width: '5rem',
    boxSizing: 'border-box',
    left: `${5 + columnPos * 5}rem`,
    top: rowStartPos * 2 + rowEndPos * 2 <= 40 ? `${4 + rowStartPos * 2}rem` : '40rem',
    border: `${isSelectedLecture ? 4 : 2}px solid ${theme.palette.primary.main}`,
  }),
}));

const SameLectureBox = ({ startTime, endTime, isSelectedLecture }: SameLectureBoxProps): JSX.Element => {
  const columnPos = Math.floor(startTime / 1440);
  const rowStartPos = ((startTime % 1440) - 540) / 30;
  const rowEndPos = (endTime - startTime) / 30;
  const classes = useStyles({ columnPos, rowStartPos, rowEndPos, isSelectedLecture });

  return <div className={classes.root} />;
};

export { SameLectureBox };
