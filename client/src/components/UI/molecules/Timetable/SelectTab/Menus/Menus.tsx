/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import { setModal } from '@/stores/timetable';
import { Box, Tooltip, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '25%',
  },
}));

const Menus = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Box className={classes.buttons}>
      <Tooltip title="시간표 추가" onClick={() => setModal('ADD')}>
        <IconButton aria-label="add">
          <AddCircleTwoToneIcon color="primary" />
        </IconButton>
      </Tooltip>
      <Tooltip title="시간표 삭제" onClick={() => setModal('DELETE')}>
        <IconButton aria-label="delete">
          <DeleteIcon color="primary" />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export { Menus };
