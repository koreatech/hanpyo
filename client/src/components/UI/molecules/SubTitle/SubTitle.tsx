/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react';
import { Typography, Divider, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface SubTitleProps {
  children: React.ReactChild;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  divider: {
    backgroundColor: theme.palette.primary.light,
    height: '0.15rem',
  },
}));

const SubTitle = ({ children }: SubTitleProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="h5" color="primary">
        {children}
      </Typography>
      <Divider className={classes.divider} />
    </Box>
  );
};

export { SubTitle };
