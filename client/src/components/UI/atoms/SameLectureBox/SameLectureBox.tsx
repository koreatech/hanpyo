import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

interface SameLectureBoxProps {
  startTime: number;
  endTime: number;
  nowSelected?: boolean;
}

interface CSSProps {
  columnPos: number;
  rowStartPos: number;
  rowEndPos: number;
  nowSelected?: boolean;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    height: (props: CSSProps) => (props.rowStartPos * 2 + props.rowEndPos * 2 <= 40 ? `${props.rowEndPos * 2}rem` : '4rem'),
    width: '5rem',
    boxSizing: 'border-box',
    left: (props: CSSProps) => `${5 + props.columnPos * 5}rem`,
    top: (props: CSSProps) => (props.rowStartPos * 2 + props.rowEndPos * 2 <= 40 ? `${4 + props.rowStartPos * 2}rem` : '40rem'),
    border: (props: CSSProps) => `${props.nowSelected ? 4 : 2}px solid ${theme.palette.primary.main}`,
  },
}));

const SameLectureBox = ({ startTime, endTime, nowSelected }: SameLectureBoxProps): JSX.Element => {
  const columnPos = Math.floor(startTime / 1440);
  const rowStartPos = ((startTime % 1440) - 540) / 30;
  const rowEndPos = (endTime - startTime) / 30;
  const classes = useStyles({ columnPos, rowStartPos, rowEndPos, nowSelected });

  return <div className={classes.root} />;
};

export { SameLectureBox };
