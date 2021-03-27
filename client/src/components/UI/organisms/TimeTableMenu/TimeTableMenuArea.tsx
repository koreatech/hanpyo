import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { TimeTableTabMenu, TimeTableTabMenuProps, TimeTableTabBtnGroup, TimeTableTabBtnGroupProps } from '@/components/UI/molecules';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '30rem',
    marginBottom: '0.3125rem',
  },
  tabs: {
    display: 'flex',
    width: '75%',
    backgroundColor: theme.palette.background.paper,
  },
}));

interface TimeTableMenuAreaProps extends TimeTableTabMenuProps, TimeTableTabBtnGroupProps {}

const TimeTableMenuArea = ({
  tables,
  seletedTab,
  onTimeTableTabChange,
  onTabAddBtnClick,
  onTabRemoveBtnClick,
}: TimeTableMenuAreaProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Box className={classes.root} component="div">
      <Box className={classes.tabs} component="div">
        <TimeTableTabMenu tables={tables} seletedTab={seletedTab} onTimeTableTabChange={onTimeTableTabChange} />
      </Box>
      <TimeTableTabBtnGroup onTabAddBtnClick={onTabAddBtnClick} onTabRemoveBtnClick={onTabRemoveBtnClick} />
    </Box>
  );
};

export { TimeTableMenuArea };
export type { TimeTableMenuAreaProps };
