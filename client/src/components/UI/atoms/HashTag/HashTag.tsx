import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface HashTagProps {
  children: React.ReactChild;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: '1rem',
    padding: '0rem 0.5rem',
    marginRight: '0.5rem',
    backgroundColor: 'white',
  },
}));

const HashTag = ({ children }: HashTagProps): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="caption" color="primary">
        {`# ${children}`}
      </Typography>
    </div>
  );
};

export { HashTag };
