import React from 'react';
import { InputBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Search } from '@material-ui/icons';

interface SearchBarProps {
  width?: string;
}

interface CSSProps {
  width: string;
}

const useStyles = makeStyles((theme) => ({
  root: ({ width }: CSSProps) => ({
    display: 'flex',
    width: `${width}`,
    boxSizing: 'border-box',
    borderRadius: '10rem',
    padding: `0.25rem 1.5rem`,
    backgroundColor: `${theme.palette.grey[100]}`,
    alignItems: 'center',
    justifyContent: 'space-between',
  }),
  input: {
    width: '85%',
  },
  icon: {
    color: `${theme.palette.grey[500]}`,
  },
}));

const SearchBar = ({ width = '100%' }: SearchBarProps): JSX.Element => {
  const classes = useStyles({ width });
  const onLectureSearchSubmitListener = (event: any) => {
    event.preventDefault();
  };
  return (
    <form className={classes.root} onSubmit={onLectureSearchSubmitListener}>
      <InputBase className={classes.input} placeholder="검색어를 입력하세요." inputProps={{ 'aria-label': 'naked' }} />
      <Search className={classes.icon} />
    </form>
  );
};

export { SearchBar };
export type { SearchBarProps };
