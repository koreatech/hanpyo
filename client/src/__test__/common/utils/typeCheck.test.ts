/* eslint-disable @typescript-eslint/no-empty-function */
import { isString, isNumber, isBoolean, isNull, isUndefined, isObject, isArray, isDate, isFunction } from '@/common/utils/typeCheck';

describe('TypeCheck Util Test', () => {
  const TEST_CASE = {
    stringCase: 'string',
    numberCase: 0,
    booleanCase: true,
    nullCase: null,
    undefindedCase: undefined,
    objectCase: {},
    arrayCase: [],
    dateCase: new Date(),
    functionCase: () => {},
  };

  describe('isString() test', () => {
    test('인자가 string 타입이면 true를, 아니면 false를 반환한다.', () => {
      // given
      // when
      // then
      expect(isString(TEST_CASE.stringCase)).toEqual(true);
      expect(isString(TEST_CASE.numberCase)).toEqual(false);
      expect(isString(TEST_CASE.booleanCase)).toEqual(false);
      expect(isString(TEST_CASE.nullCase)).toEqual(false);
      expect(isString(TEST_CASE.undefindedCase)).toEqual(false);
      expect(isString(TEST_CASE.objectCase)).toEqual(false);
      expect(isString(TEST_CASE.arrayCase)).toEqual(false);
      expect(isString(TEST_CASE.dateCase)).toEqual(false);
      expect(isString(TEST_CASE.functionCase)).toEqual(false);
    });
  });

  describe('isNumber() test', () => {
    test('인자가 number 타입이면 true를, 아니면 false를 반환한다.', () => {
      // given
      // when
      // then
      expect(isNumber(TEST_CASE.numberCase)).toEqual(true);
      expect(isNumber(TEST_CASE.stringCase)).toEqual(false);
      expect(isNumber(TEST_CASE.booleanCase)).toEqual(false);
      expect(isNumber(TEST_CASE.nullCase)).toEqual(false);
      expect(isNumber(TEST_CASE.undefindedCase)).toEqual(false);
      expect(isNumber(TEST_CASE.objectCase)).toEqual(false);
      expect(isNumber(TEST_CASE.arrayCase)).toEqual(false);
      expect(isNumber(TEST_CASE.dateCase)).toEqual(false);
      expect(isNumber(TEST_CASE.functionCase)).toEqual(false);
    });
  });

  describe('isBoolean() test', () => {
    test('인자가 boolean 타입이면 true를, 아니면 false를 반환한다.', () => {
      // given
      // when
      // then
      expect(isBoolean(TEST_CASE.booleanCase)).toEqual(true);
      expect(isBoolean(TEST_CASE.numberCase)).toEqual(false);
      expect(isBoolean(TEST_CASE.stringCase)).toEqual(false);
      expect(isBoolean(TEST_CASE.nullCase)).toEqual(false);
      expect(isBoolean(TEST_CASE.undefindedCase)).toEqual(false);
      expect(isBoolean(TEST_CASE.objectCase)).toEqual(false);
      expect(isBoolean(TEST_CASE.arrayCase)).toEqual(false);
      expect(isBoolean(TEST_CASE.dateCase)).toEqual(false);
      expect(isBoolean(TEST_CASE.functionCase)).toEqual(false);
    });
  });

  describe('isNull() test', () => {
    test('인자가 null 타입이면 true를, 아니면 false를 반환한다.', () => {
      // given
      // when
      // then
      expect(isNull(TEST_CASE.nullCase)).toEqual(true);
      expect(isNull(TEST_CASE.booleanCase)).toEqual(false);
      expect(isNull(TEST_CASE.numberCase)).toEqual(false);
      expect(isNull(TEST_CASE.stringCase)).toEqual(false);
      expect(isNull(TEST_CASE.undefindedCase)).toEqual(false);
      expect(isNull(TEST_CASE.objectCase)).toEqual(false);
      expect(isNull(TEST_CASE.arrayCase)).toEqual(false);
      expect(isNull(TEST_CASE.dateCase)).toEqual(false);
      expect(isNull(TEST_CASE.functionCase)).toEqual(false);
    });
  });

  describe('isUndefined() test', () => {
    test('인자가 undefined 타입이면 true를, 아니면 false를 반환한다.', () => {
      // given
      // when
      // then
      expect(isUndefined(TEST_CASE.undefindedCase)).toEqual(true);
      expect(isUndefined(TEST_CASE.nullCase)).toEqual(false);
      expect(isUndefined(TEST_CASE.booleanCase)).toEqual(false);
      expect(isUndefined(TEST_CASE.numberCase)).toEqual(false);
      expect(isUndefined(TEST_CASE.stringCase)).toEqual(false);
      expect(isUndefined(TEST_CASE.objectCase)).toEqual(false);
      expect(isUndefined(TEST_CASE.arrayCase)).toEqual(false);
      expect(isUndefined(TEST_CASE.dateCase)).toEqual(false);
      expect(isUndefined(TEST_CASE.functionCase)).toEqual(false);
    });
  });

  describe('isObject() test', () => {
    test('인자가 object 타입이면 true를, 아니면 false를 반환한다.', () => {
      // given
      // when
      // then
      expect(isObject(TEST_CASE.objectCase)).toEqual(true);
      expect(isObject(TEST_CASE.undefindedCase)).toEqual(false);
      expect(isObject(TEST_CASE.nullCase)).toEqual(false);
      expect(isObject(TEST_CASE.booleanCase)).toEqual(false);
      expect(isObject(TEST_CASE.numberCase)).toEqual(false);
      expect(isObject(TEST_CASE.stringCase)).toEqual(false);
      expect(isObject(TEST_CASE.arrayCase)).toEqual(false);
      expect(isObject(TEST_CASE.dateCase)).toEqual(false);
      expect(isObject(TEST_CASE.functionCase)).toEqual(false);
    });
  });

  describe('isArray() test', () => {
    test('인자가 array 타입이면 true를, 아니면 false를 반환한다.', () => {
      // given
      // when
      // then
      expect(isArray(TEST_CASE.arrayCase)).toEqual(true);
      expect(isArray(TEST_CASE.objectCase)).toEqual(false);
      expect(isArray(TEST_CASE.undefindedCase)).toEqual(false);
      expect(isArray(TEST_CASE.nullCase)).toEqual(false);
      expect(isArray(TEST_CASE.booleanCase)).toEqual(false);
      expect(isArray(TEST_CASE.numberCase)).toEqual(false);
      expect(isArray(TEST_CASE.stringCase)).toEqual(false);
      expect(isArray(TEST_CASE.dateCase)).toEqual(false);
      expect(isArray(TEST_CASE.functionCase)).toEqual(false);
    });
  });

  describe('isDate() test', () => {
    test('인자가 date 타입이면 true를, 아니면 false를 반환한다.', () => {
      // given
      // when
      // then
      expect(isDate(TEST_CASE.dateCase)).toEqual(true);
      expect(isDate(TEST_CASE.objectCase)).toEqual(false);
      expect(isDate(TEST_CASE.undefindedCase)).toEqual(false);
      expect(isDate(TEST_CASE.nullCase)).toEqual(false);
      expect(isDate(TEST_CASE.booleanCase)).toEqual(false);
      expect(isDate(TEST_CASE.numberCase)).toEqual(false);
      expect(isDate(TEST_CASE.stringCase)).toEqual(false);
      expect(isDate(TEST_CASE.arrayCase)).toEqual(false);
      expect(isDate(TEST_CASE.functionCase)).toEqual(false);
    });
  });

  describe('isFunction() test', () => {
    test('인자가 function 타입이면 true를, 아니면 false를 반환한다.', () => {
      // given
      // when
      // then
      expect(isFunction(TEST_CASE.functionCase)).toEqual(true);
      expect(isFunction(TEST_CASE.dateCase)).toEqual(false);
      expect(isFunction(TEST_CASE.objectCase)).toEqual(false);
      expect(isFunction(TEST_CASE.undefindedCase)).toEqual(false);
      expect(isFunction(TEST_CASE.nullCase)).toEqual(false);
      expect(isFunction(TEST_CASE.booleanCase)).toEqual(false);
      expect(isFunction(TEST_CASE.numberCase)).toEqual(false);
      expect(isFunction(TEST_CASE.stringCase)).toEqual(false);
      expect(isFunction(TEST_CASE.arrayCase)).toEqual(false);
    });
  });
});
