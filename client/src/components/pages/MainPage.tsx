import React from 'react';
import { Hello } from '@/components/UI/atoms';
import { Header, Timetable } from '@/components/UI/molecules';
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
          <Timetable />
        </Box>
        <Box className={classes.right}>
          <Hello
            name="hellotest~"
            big
            count={10}
            onBye={() => {
              alert('bye~');
            }}
            onHello={() => {
              alert('Hello~');
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default MainPage;
