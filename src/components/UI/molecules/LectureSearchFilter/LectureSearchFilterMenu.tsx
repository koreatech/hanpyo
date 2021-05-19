import React, { useState } from 'react';
import { useStores } from '@/stores';
import { LectureSearchFilter } from './LectureSearchFilter';

const LectureSearchFilterMenu = (): JSX.Element => {
  const { lectureInfoStore } = useStores();
  const [departmentState, setDepartmentState] = useState('');
  const [dayState, setDayState] = useState('');
  const [creditState, setCreditState] = useState('');
  const [startTimeState, setStartTimeState] = useState(false);
  const [endTimeState, setEndTimeState] = useState(false);

  const majorSelectMenuProps = {
    state: departmentState,
    setState: setDepartmentState,
    menuLabel: '개설학부',
    menus: [
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
    ],
    onSelectMenuChange: (value: string) => {
      lectureInfoStore.state.searchWord(null);
      lectureInfoStore.state.selectedDepartment(value);
    },
  };

  const daySelectMenuProps = {
    state: dayState,
    setState: setDayState,
    menuLabel: '요일',
    menus: [
      { id: 0, title: '월', value: 0 },
      { id: 1, title: '화', value: 1 },
      { id: 2, title: '수', value: 2 },
      { id: 3, title: '목', value: 3 },
      { id: 4, title: '금', value: 4 },
      { id: 5, title: '토', value: 5 },
      { id: 6, title: '전체', value: 6 },
    ],
    onSelectMenuChange: (value: string) => {
      lectureInfoStore.state.searchWord(null);
      lectureInfoStore.state.selectedDay(value);
    },
  };

  const gradeSelectMenuProps = {
    state: creditState,
    setState: setCreditState,
    menuLabel: '학점',
    menus: [
      { id: 0, title: '1학점', value: 0 },
      { id: 1, title: '2학점', value: 1 },
      { id: 2, title: '3학점', value: 3 },
      { id: 3, title: '4학점', value: 4 },
      { id: 4, title: '전체', value: 5 },
    ],
    onSelectMenuChange: (value: string) => {
      lectureInfoStore.state.searchWord(null);
      lectureInfoStore.state.selectedCredit(value);
    },
  };

  const startTimeSelectMenuProps = {
    state: startTimeState,
    setState: setStartTimeState,
    menuLabel: '시간',
    onSelectMenuChange: (value: number) => {
      lectureInfoStore.state.searchWord(null);
      let time = value;
      if (time === 720) time = 0;
      if (time === 1440) time = 720;
      lectureInfoStore.state.selectedStartTime(time);
    },
  };

  const endTimeSelectMenuProps = {
    state: endTimeState,
    setState: setEndTimeState,
    menuLabel: '시간',
    onSelectMenuChange: (value: number) => {
      lectureInfoStore.state.searchWord(null);
      let time = value;
      if (time === 720) time = 1440;
      if (time === 1440) time = 720;
      lectureInfoStore.state.selectedEndTime(time);
    },
  };

  const onInitButtonClickListener = () => {
    lectureInfoStore.state.isInit(true);
    lectureInfoStore.state.searchWord(null);
    lectureInfoStore.state.selectedDepartment(null);
    lectureInfoStore.state.selectedCredit(null);
    lectureInfoStore.state.selectedDay(null);
    lectureInfoStore.state.selectedStartTime(null);
    lectureInfoStore.state.selectedEndTime(null);
    setDepartmentState('');
    setDayState('');
    setCreditState('');
    setStartTimeState(false);
    setEndTimeState(false);
  };

  return (
    <LectureSearchFilter
      majorSelectMenu={majorSelectMenuProps}
      daySelectMenu={daySelectMenuProps}
      gradeSelectMenu={gradeSelectMenuProps}
      startTimeSelectMenu={startTimeSelectMenuProps}
      endTimeSelectMenu={endTimeSelectMenuProps}
      onInitButtonClickListener={onInitButtonClickListener}
    />
  );
};

export { LectureSearchFilterMenu };
