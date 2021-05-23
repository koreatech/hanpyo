import React from 'react';
import { getTimeBoundByDay } from '@/common/utils';
import { useStores } from '@/stores';
import { useTimeSelectMenu, useSelectMenu, useInputForm } from '@/common/hooks';
import { TimeTableAddFormContent } from './TimeTableAddFormContent';

interface SelectMenuState {
  day: string;
}

interface InputState {
  schedule: string;
}

const INIT_SELECT_STATE = { day: '' };

const INIT_INPUTS_STATE = {
  schedule: '',
};

const DAY_MENU = [
  { id: 0, title: '월', value: 0 },
  { id: 1, title: '화', value: 1 },
  { id: 2, title: '수', value: 2 },
  { id: 3, title: '목', value: 3 },
  { id: 4, title: '금', value: 4 },
];

const TimeTableAddForm = (): JSX.Element => {
  const { timeTableStore, snackbarStore } = useStores();

  const [selectState, onSelectMenuClick] = useSelectMenu<SelectMenuState>(INIT_SELECT_STATE);
  const { day } = selectState;

  const [startTimeStr, isStartSelect, onStartTimeMenuClick, checkStartTimeSelectedItem, { time: startTime }] = useTimeSelectMenu();
  const [endTimeStr, isEndTimeSelect, onEndTimeMenuClick, checkEndTimeSelectedItem, { time: endTime }] = useTimeSelectMenu();

  const [inputs, onInputChange] = useInputForm<InputState>(INIT_INPUTS_STATE);
  const { schedule } = inputs;

  const onButtonClickListener = () => {
    if (!day && !startTimeStr && !endTimeStr && schedule) return;
    const dayBound = getTimeBoundByDay(day);

    const newCustomLecture = {
      id: 0,
      code: '',
      name: schedule,
      divisionNumber: ' ',
      professor: '',
      totalStudentNumber: '',
      department: '나만의 스케줄',
      lectureTimes: [{ start: startTime + dayBound.start, end: endTime + dayBound.start }],
      room: '',
      requiredGrade: '',
      requiredMajor: '',
      credit: '',
    };

    snackbarStore.setSnackbarType(timeTableStore.addLectureToTable(newCustomLecture));
    snackbarStore.setSnackbarState(true);
  };

  return (
    <TimeTableAddFormContent
      daySelectMenuProps={{
        value: day,
        type: 'day',
        onMenuClick: onSelectMenuClick,
        menuLabel: '요일',
        menus: DAY_MENU,
      }}
      startTimeSelectMenuProps={{
        value: startTimeStr,
        selectType: 'startTime',
        selected: isStartSelect,
        menuLabel: '시간',
        onMenuClick: onStartTimeMenuClick,
        checkSelectedItem: checkStartTimeSelectedItem,
      }}
      endTimeSelectMenuProps={{
        value: endTimeStr,
        selectType: 'endTime',
        selected: isEndTimeSelect,
        menuLabel: '시간',
        onMenuClick: onEndTimeMenuClick,
        checkSelectedItem: checkEndTimeSelectedItem,
      }}
      onInputChange={onInputChange}
      onBtnClick={onButtonClickListener}
    />
  );
};

export { TimeTableAddForm };
