import React from 'react';
import { AlertSnackbar } from '@/components/UI/atoms';
import { Header, Timetable, Notice, SelectTab } from '@/components/UI/molecules';
import { SearchResults } from '@/components/UI/organisms';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  wrapper: {
    display: 'flex',
    width: '80rem',
    justifyContent: 'space-around',
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '35rem',
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    width: '35rem',
  },
}));

const MainPage = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Header />
      <Box className={classes.wrapper}>
        <Box className={classes.left}>
          <Notice />
          <SelectTab />
          <Timetable row={10} containedSat={false} />
        </Box>
        <Box className={classes.right}>
          <SearchResults />
        </Box>
      </Box>
      <AlertSnackbar />
    </Box>
  );
};

export default MainPage;
