import React, { useState } from 'react';
import { TimeTableAddFormContent } from './TimeTableAddFormContent';

const TimeTableAddForm = (): JSX.Element => {
  const [dayState, setDayState] = useState('');
  const [timeState, setTimeState] = useState(false);

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

  const timeSelectMenuProps = {
    state: timeState,
    setState: setTimeState,
    menuLabel: '시간',
    onSelectMenuChange: () => {
      console.log('시간선택');
    },
  };
  const onTimeTableFormSubmitListener = () => {
    alert('submit!');
  };

  return (
    <TimeTableAddFormContent
      daySelectMenu={daySelectMenuProps}
      timeSelectMenu={timeSelectMenuProps}
      onTimeTableFormSubmit={onTimeTableFormSubmitListener}
    />
  );
};

export { TimeTableAddForm };
