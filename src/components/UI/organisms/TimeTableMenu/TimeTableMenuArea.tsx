import React from 'react';
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
    <div className={classes.root}>
      <div className={classes.tabs}>
        <TimeTableTabMenu tables={tables} seletedTab={seletedTab} onTimeTableTabChange={onTimeTableTabChange} />
      </div>
      <TimeTableTabBtnGroup onTabAddBtnClick={onTabAddBtnClick} onTabRemoveBtnClick={onTabRemoveBtnClick} />
    </div>
  );
};

export { TimeTableMenuArea };
export type { TimeTableMenuAreaProps };
