import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  divider: {
    height: '100%',
    borderLeft: `1px solid ${theme.palette.grey[400]}`,
  },
}));

const LectureInfoDivider = (): JSX.Element => {
  const classes = useStyles();

  return <Box className={classes.divider} />;
};

export { LectureInfoDivider };
