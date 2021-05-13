import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  divider: {
    height: '100%',
    borderLeft: `1px solid ${theme.palette.grey[400]}`,
  },
}));

const LectureInfoDivider = (): JSX.Element => {
  const classes = useStyles();

  return <div className={classes.divider} />;
};

export { LectureInfoDivider };
