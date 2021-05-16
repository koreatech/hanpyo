import React from 'react';
import { Typography, IconButton, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { useStores } from '@/stores';

interface LectureBoxProps {
  startTime: number;
  endTime: number;
  bgcolor?: string;
  lectureName: string;
  classNumber?: string | number;
  professorName: string;
}

interface CSSProps {
  columnPos: number;
  rowStartPos: number;
  rowEndPos: number;
  bgcolor?: string;
}

const useStyles = makeStyles((theme) => ({
  root: ({ rowStartPos, rowEndPos, columnPos, bgcolor }: CSSProps) => ({
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    height: rowStartPos * 2 + rowEndPos * 2 <= 40 ? `${rowEndPos * 2}rem` : '4rem',
    width: '5rem',
    left: `${5 + columnPos * 5}rem`,
    top: rowStartPos * 2 + rowEndPos * 2 <= 40 ? `${4 + rowStartPos * 2}rem` : '40rem',
    boxSizing: 'border-box',
    backgroundColor: bgcolor || 'rgba(250, 244, 192)',
    border: `1px solid ${theme.palette.grey[300]}`,
    borderTop: `2px solid ${theme.palette.grey[300]}`,

    '&:hover': {
      boxShadow: '0 3px 4.5px 0 rgba(0, 0, 0, 0.16)',

      '&:first-child': {
        display: 'block',
      },

      '& .MuiButtonBase-root': {
        display: 'block',
      },
    },

    '& .MuiButtonBase-root': {
      display: 'none',
      position: 'absolute',
      transform: 'translate(-50%, -50%)',
      top: '50%',
      left: '50%',
    },
  }),
  membrane: {
    display: 'none',
    position: 'absolute',
    backgroundColor: theme.palette.grey[300],
    opacity: '0.5',
    width: '100%',
    height: '100%',
  },
}));

const LectureBox = ({ startTime, endTime, bgcolor, lectureName, classNumber, professorName }: LectureBoxProps): JSX.Element => {
  const columnPos = Math.floor(startTime / 1440);
  const rowStartPos = ((startTime % 1440) - 540) / 30;
  const rowEndPos = (endTime - startTime) / 30;
  const classes = useStyles({ columnPos, rowStartPos, rowEndPos, bgcolor });

  const { timeTableStore, snackbarStore } = useStores();

  const onLectureBoxClickListener = () => {
    timeTableStore.removeLectureFromTable(lectureName);
    snackbarStore.showTabDeleteMsg();
  };

  return (
    <div className={classes.root}>
      <div className={classes.membrane} />
      <Tooltip title="시간표 삭제" arrow placement="right" onClick={onLectureBoxClickListener}>
        <IconButton aria-label="delete">
          <DeleteIcon style={{ fontSize: 16 }} />
        </IconButton>
      </Tooltip>
      <div>
        <Typography variant="subtitle2">{lectureName}</Typography>
      </div>
      <div>
        <Typography variant="caption">{`${classNumber || '01'} ${professorName}`}</Typography>
      </div>
    </div>
  );
};

export { LectureBox };
