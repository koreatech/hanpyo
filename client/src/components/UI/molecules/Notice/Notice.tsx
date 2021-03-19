import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Notifications } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '30rem',
    boxSizing: 'border-box',
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: '10rem',
    padding: `0.5rem 1.5rem`,
    margin: '1.2rem 0',
    boxShadow: '0 1.5px 3px 0 rgba(0, 0, 0, 0.16)',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.primary.main,
    marginLeft: '1rem',
  },
}));

const Notice = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Notifications color="primary" />
      <Box className={classes.content}>공지사항 입니다.</Box>
    </Box>
  );
};

export { Notice };
