import React, { useRef } from 'react';
import { InputBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Search } from '@material-ui/icons';
import { useStores } from '@/stores';

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
    border: 'none',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    '&:focus': {
      outline: 'none',
    },
    fontSize: '0.9rem',
  },
  icon: {
    color: `${theme.palette.grey[500]}`,
  },
}));

const SearchBar = ({ width = '100%' }: SearchBarProps): JSX.Element => {
  const classes = useStyles({ width });
  const inputElem = useRef<HTMLInputElement>(null);
  const { lectureInfoStore } = useStores();
  const onLectureSearchSubmitListener = (event: any) => {
    event.preventDefault();
    lectureInfoStore.state.searchWord(inputElem.current?.value);
  };
  return (
    <form className={classes.root} onSubmit={onLectureSearchSubmitListener}>
      <input ref={inputElem} className={classes.input} placeholder="검색어를 입력하세요." />
      <Search className={classes.icon} />
    </form>
  );
};

export { SearchBar };
export type { SearchBarProps };
