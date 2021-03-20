import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface LectureBoxProps {
  starttime: number;
  endtime: number;
  bgcolor?: string;
  name: string;
  division?: string;
  prof: string;
}

interface CSSProps {
  columnPos: number;
  rowStartPos: number;
  rowEndPos: number;
  bgcolor?: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    position: 'absolute',
    height: (props: CSSProps) => (props.rowStartPos * 2 + props.rowEndPos * 2 <= 40 ? `${props.rowEndPos * 2}rem` : '4rem'),
    width: '5rem',
    left: (props: CSSProps) => `${5 + props.columnPos * 5}rem`,
    top: (props: CSSProps) => (props.rowStartPos * 2 + props.rowEndPos * 2 <= 40 ? `${4 + props.rowStartPos * 2}rem` : '40rem'),
    boxSizing: 'border-box',
    backgroundColor: (props: CSSProps) => props.bgcolor || 'rgba(250, 244, 192)',
    border: `1px solid ${theme.palette.grey[300]}`,
    borderTop: `2px solid ${theme.palette.grey[300]}`,
  },
}));

const LectureBox = ({ starttime, endtime, bgcolor, name, division, prof }: LectureBoxProps): JSX.Element => {
  const columnPos = Math.floor(starttime / 1440);
  const rowStartPos = ((starttime % 1440) - 540) / 30;
  const rowEndPos = (endtime - starttime) / 30;
  const classes = useStyles({ columnPos, rowStartPos, rowEndPos, bgcolor });
  return (
    <Box className={classes.root}>
      <Box>
        <Typography>{name}</Typography>
      </Box>
      <Box>
        <Typography>{division}</Typography>
        <Typography>{prof}</Typography>
      </Box>
    </Box>
  );
};

export { LectureBox };
