import React from 'react';
import { AlertSnackbar } from '@/components/UI/atoms';
import { Box, makeStyles } from '@material-ui/core';
import { Header, Timetable, Notice, SearchResults } from '@/components/UI/molecules';
import { ModalPopup, TimeTableMenu } from '@/components/UI/organisms';

const useStyles = makeStyles({
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
});

const MainPage = (): JSX.Element => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root} component="div">
        <Header />
        <Box className={classes.wrapper} component="div">
          <Box className={classes.left} component="div">
            <Notice />
            <TimeTableMenu />
            <Timetable row={10} containedSat={false} />
          </Box>
          <Box className={classes.right} component="div">
            <SearchResults />
          </Box>
        </Box>
      </Box>
      <AlertSnackbar />
      <ModalPopup />
    </>
  );
};

export default MainPage;
