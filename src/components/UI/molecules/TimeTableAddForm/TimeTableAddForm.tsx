import React, { useState } from 'react';
import { getTimeBoundByDay } from '@/common/utils';
import { useStores } from '@/stores';
import { TimeTableAddFormContent } from './TimeTableAddFormContent';

const TimeTableAddForm = (): JSX.Element => {
  const [dayState, setDayState] = useState('');
  const [startTimeState, setStartTimeState] = useState(false);
  const [endTimeState, setEndTimeState] = useState(false);
  const [startTimeValueState, setStartTimeValueState] = useState(0);
  const [endTimeValueState, setEndTimeValueState] = useState(0);
  const [inputState, setInputState] = useState('');

  const { timeTableStore } = useStores();

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
    ],
    onSelectMenuChange: () => {
      console.log('요일선택');
    },
  };

  const startTimeSelectMenuProps = {
    selected: startTimeState,
    setSelected: setStartTimeState,
    setTimeValue: setStartTimeValueState,
    menuLabel: '시간',
    onSelectMenuChange: () => {
      console.log('시간선택');
    },
  };

  const endTimeSelectMenuProps = {
    selected: endTimeState,
    setSelected: setEndTimeState,
    setTimeValue: setEndTimeValueState,
    menuLabel: '시간',
    onSelectMenuChange: () => {
      console.log('시간선택');
    },
  };
  const onTimeTableFormSubmitListener = () => {
    alert('submit!');
  };

  const onButtonClickListener = () => {
    if (!dayState && !startTimeState && !endTimeState && inputState) return;
    const dayBound = getTimeBoundByDay(dayState);

    const newCustomLecture = {
      id: 0,
      code: '',
      name: inputState,
      divisionNumber: ' ',
      professor: '',
      totalStudentNumber: '',
      department: '나만의 스케줄',
      lectureTimes: [{ start: startTimeValueState + dayBound.start, end: endTimeValueState + dayBound.start }],
      room: '',
      requiredGrade: '',
      requiredMajor: '',
      credit: '',
    };

    console.log(newCustomLecture);
    timeTableStore.addLectureToTable(newCustomLecture);
  };

  const onInputChangeListener = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputState(event.target.value);
  };
  return (
    <TimeTableAddFormContent
      daySelectMenu={daySelectMenuProps}
      startTimeSelectMenu={startTimeSelectMenuProps}
      endTimeSelectMenu={endTimeSelectMenuProps}
      onTimeTableFormSubmit={onTimeTableFormSubmitListener}
      inputState={inputState}
      onInputChange={onInputChangeListener}
      onBtnClick={onButtonClickListener}
    />
  );
};

export { TimeTableAddForm };
