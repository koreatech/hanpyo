import React from 'react';
import { useStores, LectureFilterType } from '@/stores';
import { useTimeSelect, useSelect } from '@/common/hooks';
import { LectureSearchFilter } from './LectureSearchFilter';

interface SelectMenuState {
  department: string;
  day: string;
  credit: string;
}

const DEPARTMENT_MENU = [
  { id: 0, title: '컴퓨터공학부', value: 0 },
  { id: 1, title: '디자인ㆍ건축공학부', value: 1 },
  { id: 2, title: '기계공학부', value: 2 },
  { id: 3, title: '메카트로닉스공학부', value: 3 },
  { id: 4, title: '전기ㆍ전자ㆍ통신공학부', value: 4 },
  { id: 5, title: '에너지신소재화학공학부', value: 5 },
  { id: 6, title: '산업경영학부', value: 6 },
  { id: 7, title: '교양학부', value: 7 },
  { id: 8, title: 'HRD학과', value: 8 },
  { id: 9, title: '전체', value: 9 },
];

const SELECT_MENU = [
  { id: 0, title: '월', value: 0 },
  { id: 1, title: '화', value: 1 },
  { id: 2, title: '수', value: 2 },
  { id: 3, title: '목', value: 3 },
  { id: 4, title: '금', value: 4 },
  { id: 5, title: '토', value: 5 },
  { id: 6, title: '전체', value: 6 },
];

const CREDIT_MENU = [
  { id: 0, title: '1학점', value: 0 },
  { id: 1, title: '2학점', value: 1 },
  { id: 2, title: '3학점', value: 3 },
  { id: 3, title: '4학점', value: 4 },
  { id: 4, title: '전체', value: 5 },
];

const INIT_SELECT_STATE = { department: '', day: '', credit: '' };

const LectureSearchFilterMenu = (): JSX.Element => {
  const { lectureInfoStore } = useStores();

  const changeFilterStore = (type: string, value: string) => {
    lectureInfoStore.changeFilterState(type, value);
  };

  const [selectState, onSelectMenuClick, { reset: resetSelectState }] = useSelect<SelectMenuState>(INIT_SELECT_STATE, {
    callback: changeFilterStore,
  });
  const { department, day, credit } = selectState;

  const [startTimeStr, isStartSelect, onStartTimeMenuClick, checkStartTimeSelectedItem, { reset: resetStartTime }] = useTimeSelect({
    callback: changeFilterStore,
  });

  const [endTimeStr, isEndTimeSelect, onEndTimeMenuClick, checkEndTimeSelectedItem, { reset: resetEndTime }] = useTimeSelect({
    callback: changeFilterStore,
  });

  const onInitButtonClickListener = () => {
    lectureInfoStore.resetFilterState();
    resetSelectState();
    resetStartTime();
    resetEndTime();
  };

  return (
    <LectureSearchFilter
      majorSelectMenu={{
        value: department,
        type: LectureFilterType.DEPARTMENT,
        onMenuClick: onSelectMenuClick,
        menuLabel: '개설학부',
        menus: DEPARTMENT_MENU,
      }}
      daySelectMenu={{
        value: day,
        type: LectureFilterType.DAY,
        onMenuClick: onSelectMenuClick,
        menuLabel: '요일',
        menus: SELECT_MENU,
      }}
      gradeSelectMenu={{
        value: credit,
        type: LectureFilterType.CREDIT,
        onMenuClick: onSelectMenuClick,
        menuLabel: '학점',
        menus: CREDIT_MENU,
      }}
      startTimeSelectMenu={{
        value: startTimeStr,
        selectType: LectureFilterType.START_TIME,
        selected: isStartSelect,
        menuLabel: '시간',
        onMenuClick: onStartTimeMenuClick,
        checkSelectedItem: checkStartTimeSelectedItem,
      }}
      endTimeSelectMenu={{
        value: endTimeStr,
        selectType: LectureFilterType.END_TIME,
        selected: isEndTimeSelect,
        menuLabel: '시간',
        onMenuClick: onEndTimeMenuClick,
        checkSelectedItem: checkEndTimeSelectedItem,
      }}
      onInitButtonClickListener={onInitButtonClickListener}
    />
  );
};

export { LectureSearchFilterMenu };
