/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import { Tabs, Tab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '30rem',
  },
  tabs: {
    display: 'flex',
    width: '75%',
    backgroundColor: theme.palette.background.paper,
  },
  tabHead: {
    display: 'none',
  },
}));

interface TableInfo {
  name: string;
  index: number;
}

interface TimeTableTabMenuProps {
  tables: Array<TableInfo>;
  seletedTab: number;
  onTimeTableTabChange: () => void;
}

const TabProps = (index: number) => {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
};

const TimeTableTabMenu = ({ tables, seletedTab, onTimeTableTabChange }: TimeTableTabMenuProps): JSX.Element => {
  const classes = useStyles();

  const fillTable = () => {
    return tables.map((table) => <Tab label={table.name} {...TabProps(table.index)} />);
  };

  return (
    <Tabs
      value={seletedTab}
      onChange={onTimeTableTabChange}
      indicatorColor="primary"
      textColor="primary"
      variant="scrollable"
      scrollButtons="auto"
      aria-label="timetable select tabs">
      <Tab className={classes.tabHead} label="" {...TabProps(0)} />
      {fillTable()}
    </Tabs>
  );
};

export { TimeTableTabMenu };
export type { TimeTableTabMenuProps };
