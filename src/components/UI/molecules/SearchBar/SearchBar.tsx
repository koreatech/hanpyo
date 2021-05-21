import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Search } from '@material-ui/icons';

interface SearchBarProps {
  width?: string;
  onSearchBarChange?: () => void;
}

interface CSSProps {
  width: string;
}

const useStyles = makeStyles((theme) => ({
  root: ({ width }: CSSProps) => ({
    borderRadius: '1.25rem',
    backgroundColor: `${theme.palette.grey[100]}`,
    display: 'flex',
    width: `${width}`,
    boxSizing: 'border-box',
    padding: `0.4rem 1.5rem`,
    alignItems: 'center',
    justifyContent: 'space-between',
  }),
  input: {
    width: '85%',
    border: 'none',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    fontSize: '0.9rem',

    '&:focus': {
      outline: 'none',
    },
  },
  icon: {
    color: `${theme.palette.grey[500]}`,

    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

const SearchBar = ({ onSearchBarChange, width = '100%' }: SearchBarProps): JSX.Element => {
  const classes = useStyles({ width });

  return (
    <div className={classes.root}>
      <input className={classes.input} name="searchWord" placeholder="검색어를 입력하세요." onChange={onSearchBarChange} />
      <Search className={classes.icon} />
    </div>
  );
};

export { SearchBar };
export type { SearchBarProps };
