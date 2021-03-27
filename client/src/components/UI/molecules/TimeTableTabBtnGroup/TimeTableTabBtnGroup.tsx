import React from 'react';
import { Box, Tooltip, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';
import DeleteIcon from '@material-ui/icons/Delete';

interface TimeTableTabBtnGroupProps {
  onTabAddBtnClick: () => void;
  onTabRemoveBtnClick: () => void;
}

const useStyles = makeStyles({
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '25%',
  },
});

const TimeTableTabBtnGroup = ({ onTabAddBtnClick, onTabRemoveBtnClick }: TimeTableTabBtnGroupProps): JSX.Element => {
  const classes = useStyles();
  return (
    <Box className={classes.buttons}>
      <Tooltip title="시간표 추가" onClick={onTabAddBtnClick}>
        <IconButton aria-label="add">
          <AddCircleTwoToneIcon color="primary" />
        </IconButton>
      </Tooltip>
      <Tooltip title="시간표 삭제" onClick={onTabRemoveBtnClick}>
        <IconButton aria-label="delete">
          <DeleteIcon color="primary" />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export { TimeTableTabBtnGroup };
export type { TimeTableTabBtnGroupProps };
