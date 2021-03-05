import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Timetable, Notice } from '@/components/UI/molecules';
import { Button, ButtonType } from '@/components/UI/atoms';

const useStyles = makeStyles((theme) => ({
  left: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '35rem',
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '30rem',
    marginTop: '1.2rem',
  },
}));

const MainLeft = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Box className={classes.left}>
      <Notice />
      <Timetable row={10} containedSat={false} />
      <Box className={classes.buttonWrapper}>
        <Button btnType={ButtonType.save}>저 장</Button>
        <Button btnType={ButtonType.share}>공 유</Button>
      </Box>
    </Box>
  );
};

export { MainLeft };
