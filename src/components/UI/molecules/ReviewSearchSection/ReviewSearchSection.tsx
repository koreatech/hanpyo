import React, { useState } from 'react';
import { FormControlLabel } from '@material-ui/core';
import CheckBox from '@material-ui/core/Checkbox';
import { SelectMenu } from '@/components/UI/atoms';
import { ReviewSearchBar } from '@/components/UI/molecules';
import { useSelect } from '@/common/hooks';

enum OrderType {
  LATEST = '최신 순',
  RECOMMEND = '추천 순',
  RATING = '별점 순',
}

interface SelectMenuState {
  order: string;
}

const INIT_SELECT_STATE = { order: '' };

const INIT_ORDER_MENU = [
  { id: 0, title: OrderType.LATEST, value: OrderType.LATEST },
  { id: 1, title: OrderType.RECOMMEND, value: OrderType.RECOMMEND },
  { id: 2, title: OrderType.RATING, value: OrderType.RATING },
];

const ReviewSearchSection = (): JSX.Element => {
  const [isChecked, setIsChecked] = useState(false);
  const [selectState, onSelectMenuClick] = useSelect<SelectMenuState>(INIT_SELECT_STATE);
  const { order } = selectState;

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
      <SelectMenu
        value={order}
        type="order"
        onMenuClick={onSelectMenuClick}
        menuLabel="정렬순서"
        menus={INIT_ORDER_MENU}
        dropMenuWidth="5.36375rem"
      />
    </>
  );
};

export { ReviewSearchSection };
