/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useReducer, useMemo } from 'react';

interface TimeSelectState {
  selectedAMPM: string | undefined;
  selectedHour: string | undefined;
  selectedMinute: string | undefined;
  isSelect: boolean;
}

enum TimeSelectValueType {
  AM_PM = 'AM_PM',
  HOUR = 'HOUR',
  MINUTE = 'MINUTE',
}

enum TimeSelectActionType {
  SELECT_AM_PM = 'SELECT_AM_PM',
  SELECT_HOUR = 'SELECT_HOUR',
  SELECT_MINUTE = 'SELECT_MINUTE',
  RESET = 'RESET',
}

interface TimeSelectAction {
  type: TimeSelectActionType;
  value?: string;
}

interface Option {
  callback: Function;
}

interface TimeSelectUtility {
  time: number;
  reset: () => void;
}

const INIT_STATE: TimeSelectState = {
  selectedAMPM: '오전',
  selectedHour: '01',
  selectedMinute: '00',
  isSelect: false,
};

function reducer(prevState: TimeSelectState, action: TimeSelectAction): TimeSelectState {
  switch (action.type) {
    case TimeSelectActionType.SELECT_AM_PM:
      return { ...prevState, selectedAMPM: action.value, isSelect: true };
    case TimeSelectActionType.SELECT_HOUR:
      return { ...prevState, selectedHour: action.value, isSelect: true };
    case TimeSelectActionType.SELECT_MINUTE:
      return { ...prevState, selectedMinute: action.value, isSelect: true };
    case TimeSelectActionType.RESET:
      return INIT_STATE;
    default:
      return prevState;
  }
}

function useTimeSelectMenu(
  option?: Option,
): [string, boolean, (e: React.MouseEvent<HTMLLIElement>) => void, (itemValue: string) => boolean, TimeSelectUtility] {
  const [state, dispatch] = useReducer<React.Reducer<TimeSelectState, TimeSelectAction>, TimeSelectState>(reducer, INIT_STATE, () => INIT_STATE);
  const { selectedAMPM, selectedHour, selectedMinute, isSelect } = state;

  const value = `${selectedAMPM}${selectedHour && `  ${selectedHour} : `}${selectedMinute}`;

  const calculateTime = (): number => {
    const ampm = selectedAMPM;
    const hour = Number(selectedHour);
    const minute = Number(selectedMinute);

    let time = ampm === '오후' ? 720 : 0;
    time += hour * 60 + minute;

    return time;
  };

  const time = useMemo(calculateTime, [state]);

  const onMenuClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const { dataset } = (e.target as HTMLElement).closest('li') as HTMLLIElement;
    const { type, title, selectType } = dataset;

    if (type === TimeSelectValueType.AM_PM) {
      dispatch({ type: TimeSelectActionType.SELECT_AM_PM, value: title ?? '' });
    }

    if (type === TimeSelectValueType.HOUR) {
      dispatch({ type: TimeSelectActionType.SELECT_HOUR, value: title ?? '' });
    }

    if (type === TimeSelectValueType.MINUTE) {
      dispatch({ type: TimeSelectActionType.SELECT_MINUTE, value: title ?? '' });
    }

    if (option?.callback) {
      option.callback(selectType, time);
    }
  };

  const checkSelectedItem = (itemValue: string): boolean => {
    return itemValue === selectedAMPM || itemValue === selectedHour || itemValue === selectedMinute;
  };

  const reset = () => {
    dispatch({ type: TimeSelectActionType.RESET });
  };

  return [value, isSelect, onMenuClick, checkSelectedItem, { time, reset }];
}

export default useTimeSelectMenu;
