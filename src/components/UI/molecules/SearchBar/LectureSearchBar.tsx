import React from 'react';
import { useStores } from '@/stores';
import { throttle } from '@/common/utils';
import { SearchBar } from './SearchBar';

const LectureSearchBar = (): JSX.Element => {
  const { lectureInfoStore } = useStores();

  const onSearchBarChangeListener = throttle((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    lectureInfoStore.setSearchWord(value);
  }, 500);

  return <SearchBar onSearchBarChange={onSearchBarChangeListener} />;
};

export { LectureSearchBar };
