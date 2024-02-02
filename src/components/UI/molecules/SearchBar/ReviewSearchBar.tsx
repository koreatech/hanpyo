import React from 'react';
import { throttle } from '@/common/utils';
import { SearchBar, SearchBarProps } from './SearchBar';

interface ReviewSearchBarProps {
  searchBarProp?: SearchBarProps;
}

const ReviewSearchBar = ({ searchBarProp }: ReviewSearchBarProps): JSX.Element => {
  const onSearchBarChangeListener = throttle((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
  }, 500);

  return <SearchBar {...searchBarProp} onSearchBarChange={onSearchBarChangeListener} />;
};

export { ReviewSearchBar };
