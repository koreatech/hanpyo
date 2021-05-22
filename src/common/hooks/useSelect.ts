/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

interface Option {
  callback: Function;
}

function useSelect<T>(initState: T, option?: Option): [T, (e: React.MouseEvent<HTMLElement, MouseEvent>) => void, () => void] {
  const [selectState, setSelectState] = useState<T>(initState);

  const onMenuClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const { dataset } = (e.target as HTMLElement).closest('li') as HTMLLIElement;
    const { title, type } = dataset;

    if (type) {
      setSelectState({ ...selectState, [type]: title ?? '' });
    }

    if (option?.callback) {
      option.callback(type, title ?? '');
    }
  };

  const resetSelectState = () => {
    setSelectState(initState);
  };

  return [selectState, onMenuClick, resetSelectState];
}

export default useSelect;
