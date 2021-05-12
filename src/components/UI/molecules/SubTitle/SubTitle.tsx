import React from 'react';
import { Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface SubTitleProps {
  children: React.ReactChild;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginTop: '1.2rem',
  },
  divider: {
    backgroundColor: theme.palette.primary.light,
    height: '0.15rem',
  },
}));

const SubTitle = ({ children }: SubTitleProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h5" color="primary">
        {children}
      </Typography>
      <Divider className={classes.divider} />
    </div>
  );
};

export { SubTitle };
