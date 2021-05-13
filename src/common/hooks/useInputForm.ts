import React, { useMemo, useState } from 'react';
import { debounce } from '@/common/utils';
import { isEmailID, isPassword, isName, isNickname, isGrade, isMajor } from '@/common/utils/validator';

enum InputNameType {
  email = 'email',
  password = 'password',
  name = 'name',
  nickname = 'nickname',
  grade = 'grade',
  major = 'major',
}

interface Option {
  validation?: boolean;
  timeout?: number;
}

interface InputUtility {
  reset: () => void;
  isEmpty: boolean;
  valids: boolean[];
  isValid: boolean;
}

const INIT_OPTIONS = {
  validation: false,
  timeout: 500,
};

const ERRORS = {
  VALID: new Error(`'name' does not exist on type 'InputNameType' `),
};

function useInputForm<T>(initInputState: T, options: Option = INIT_OPTIONS): [T, () => void, InputUtility] {
  const { validation, timeout } = { ...INIT_OPTIONS, ...options };

  const createValidState = () => {
    if (validation) {
      return Object.keys(initInputState).map(() => true);
    }
    return [];
  };

  const [inputs, setInputs] = useState(initInputState);
  const [valids, setValids] = useState(createValidState());

  const validateValue = (name: string, value: string): boolean => {
    if (name === InputNameType.email) return isEmailID(value);
    if (name === InputNameType.password) return isPassword(value);
    if (name === InputNameType.name) return isName(value);
    if (name === InputNameType.nickname) return isNickname(value);
    if (name === InputNameType.grade) return isGrade(value);
    if (name === InputNameType.major) return isMajor(value);

    throw ERRORS.VALID;
  };

  const onChangeListener = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setInputs({ ...inputs, [name]: value });
    if (valids) {
      const findIdx = Object.keys(inputs).findIndex((key) => key === name);
      setValids(
        valids.map((valid, idx) => {
          if (idx === findIdx) return validateValue(name, value);
          return valid;
        }),
      );
    }
  }, timeout);

  const checkEmptyData = (inputState: T): boolean => {
    return !Object.values(inputState).every((input) => !!input);
  };

  const checkValidData = (validState: boolean[]): boolean => {
    return validState.every((valid) => valid);
  };

  const isEmpty = useMemo(() => checkEmptyData(inputs), [inputs]);
  const isValid = useMemo(() => checkValidData(valids), [valids]);

  const reset = () => {
    setInputs(initInputState);

    if (valids) {
      setValids(createValidState());
    }
  };

  return [inputs, onChangeListener, { reset, isEmpty, valids, isValid }];
}

export default useInputForm;
