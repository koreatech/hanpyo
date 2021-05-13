import React from 'react';
import { Tabs, Tab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface TableInfo {
  name: string;
  index: number;
}

interface TimeTableTabMenuProps {
  tables: Array<TableInfo>;
  seletedTab: number;
  onTimeTableTabChange: (e: React.ChangeEvent<{}>, newValue: number) => void;
}

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
  tab: {
    width: '6.875rem',
    '@media (minWidth: 600px)': {
      minWidth: '6.875rem !important',
    },
  },
  tabHead: {
    display: 'none',
  },
}));

const TabProps = (tabIndex: number) => {
  return {
    id: `scrollable-auto-tab-${tabIndex}`,
    'aria-controls': `scrollable-auto-tabpanel-${tabIndex}`,
  };
};

const TimeTableTabMenu = ({ tables, seletedTab, onTimeTableTabChange }: TimeTableTabMenuProps): JSX.Element => {
  const classes = useStyles();

  const getTabs = () => {
    return tables.map((table) => <Tab key={table.index} className={classes.tab} label={table.name} {...TabProps(table.index)} />);
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
      {getTabs()}
    </Tabs>
  );
};

export { TimeTableTabMenu };
export type { TimeTableTabMenuProps };
