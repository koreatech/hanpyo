/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import { useReactiveVar } from '@apollo/client';
import { nowSelectedTab, selectTab, tables } from '@/stores/timetable';
import { Box, Tabs, Tab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Menus } from './Menus/Menus';
import { TimetableMenuModal } from './Menus/Modal';

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

const TabProps = (index: number) => {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
};

interface TableInfo {
  name: string;
  index: number;
}

interface TableSelectBarProps {
  tables: Array<TableInfo>;
  value: number;
  handleChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
}

const TableSelectBar = ({ value, handleChange }: TableSelectBarProps) => {
  const classes = useStyles();
  const fillTable = () => {
    return tables().map((table) => <Tab label={table.name} {...TabProps(table.index)} />);
  };
  return (
    <Tabs
      value={value}
      onChange={handleChange}
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

const SelectTab = (): JSX.Element => {
  const classes = useStyles();
  const selectedIndex = useReactiveVar(nowSelectedTab);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    selectTab(newValue);
  };

  return (
    <Box className={classes.root}>
      <div className={classes.tabs}>
        <TableSelectBar tables={tables()} value={selectedIndex} handleChange={handleChange} />
      </div>
      <Menus />
      <TimetableMenuModal />
    </Box>
  );
};

export { SelectTab };
export type { TableInfo };
