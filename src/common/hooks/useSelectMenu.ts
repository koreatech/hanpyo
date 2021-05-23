/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

interface Option {
  callback: Function;
}

interface SelectUtility {
  reset: () => void;
}

function useSelectMenu<T>(initState: T, option?: Option): [T, (e: React.MouseEvent<HTMLElement, MouseEvent>) => void, SelectUtility] {
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

  const reset = () => {
    setSelectState(initState);
  };

  return [selectState, onMenuClick, { reset }];
}

export default useSelectMenu;
