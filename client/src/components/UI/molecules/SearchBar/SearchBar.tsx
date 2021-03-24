/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react';
import { InputBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Search } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    boxSizing: 'border-box',
    borderRadius: '10rem',
    padding: `0.25rem 1.5rem`,
    margin: '1.2rem 0',
    backgroundColor: `${theme.palette.grey[100]}`,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    width: '85%',
  },
  icon: {
    color: `${theme.palette.grey[500]}`,
  },
}));

const SearchBar = (): JSX.Element => {
  const classes = useStyles();

  return (
    <form className={classes.root}>
      <InputBase className={classes.input} placeholder="검색어를 입력하세요." inputProps={{ 'aria-label': 'naked' }} />
      <Search className={classes.icon} />
    </form>
  );
};

export { SearchBar };
