import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

interface HeaderMenuProps {
  children: React.ReactChild;
  link: string;
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
  link: {
    textDecoration: 'none',
  },
}));

const HeaderMenu = ({ children, link }: HeaderMenuProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.menu}>
      <Link to={link} className={classes.link}>
        <Typography className={classes.text} variant="h4">
          {children}
        </Typography>
      </Link>
    </div>
  );
};

export { HeaderMenu };
