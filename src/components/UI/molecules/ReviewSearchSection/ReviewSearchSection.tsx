import React, { useState } from 'react';
import { FormControlLabel } from '@material-ui/core';
import CheckBox from '@material-ui/core/Checkbox';
import { SelectMenu } from '@/components/UI/atoms';
import { ReviewSearchBar } from '@/components/UI/molecules';

const ReviewSearchSection = (): JSX.Element => {
  const [isChecked, setIsChecked] = useState(false);
  const [searchFilterState, setSearchFilterState] = useState('');

  const searchFilterSelectMenuProps = {
    state: searchFilterState,
    setState: setSearchFilterState,
    menuLabel: '정렬순서',
    menus: [
      { id: 0, title: '최신순', value: 0 },
      { id: 1, title: '추천순', value: 1 },
      { id: 2, title: '별점순', value: 3 },
    ],
    onSelectMenuChange: () => {
      console.log('정렬 방법 선택');
    },
  };

  const onCheckBoxChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };
  return (
    <>
      <ReviewSearchBar searchBarProp={{ width: '60%' }} />
      <FormControlLabel
        control={<CheckBox checked={isChecked} onChange={onCheckBoxChangeHandler} name="isMine" color="primary" />}
        label="내가 쓴 글 보기"
      />
      <SelectMenu {...searchFilterSelectMenuProps} dropMenuWidth="5rem" />
    </>
  );
};

export { ReviewSearchSection };
