import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface HeaderMenuProps {
  children: React.ReactChild;
}

const useStyles = makeStyles((theme) => ({
  menu: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    minHeight: '100%',
    boxSizing: 'border-box',
    margin: '1rem',
    '&:hover': {
      color: theme.palette.primary.main,
      borderBottom: `1rem solid ${theme.palette.primary.main}`,
      borderTop: `1rem solid ${theme.palette.secondary.main}`,
      '& .MuiTypography-root': {
        color: theme.palette.primary.main,
      },
    },
  },
  text: {
    color: theme.palette.grey[500],
  },
}));

const HeaderMenu = ({ children }: HeaderMenuProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.menu}>
      <Typography className={classes.text} variant="h4">
        {children}
      </Typography>
    </div>
  );
};

export { HeaderMenu };
