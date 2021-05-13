import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    borderRight: `1px solid ${theme.palette.grey[300]}`,
  },
  top: {
    borderTop: `1px solid ${theme.palette.grey[300]}`,
    height: '50%',
    boxSizing: 'border-box',
  },
  bottom: {
    borderTop: `1px dashed ${theme.palette.grey[300]}`,
    height: '50%',
    boxSizing: 'border-box',
  },
}));

const LectureGrid = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.top} />
      <div className={classes.bottom} />
    </div>
  );
};

export { LectureGrid };
