import { isEmailID, isPassword, isName, isNickname, isGrade, isMajor } from '@/common/utils/validator';

describe('Validator Util Test', () => {
  const checkTestCases = (testFunc: Function, testCases: string[], equalValue: boolean) => {
    testCases.forEach((testCase) => {
      expect(testFunc(testCase)).toEqual(equalValue);
    });
  };

  describe('isEmailID() test', () => {
    test('이메일 아이디는 1자리 이상 12자리 이하여야한다.', () => {
      // given
      // when
      const validCases = ['a', 'test12345', 'test', 'testtesttest'];
      const inValidCases = ['', 'testtesttesttesttest'];

      // then
      checkTestCases(isEmailID, validCases, true);
      checkTestCases(isEmailID, inValidCases, false);
    });

    test('이메일 아이디는 영소문자, 숫자, _ 로만 조합된 문자열만 가능하다.', () => {
      // given
      // when
      const validCases = ['abc', '1234', '_', 'abc123', '__abc123'];
      const inValidCases = ['~!@#$%^&*()', 'test1234!', '@test1234', 'Te##!@st', '테스트', '테스트1234', '테스트Test1234', 'Test', 'ABCD'];

      // then
      checkTestCases(isEmailID, validCases, true);
      checkTestCases(isEmailID, inValidCases, false);
    });
  });

  describe('isPassword() test', () => {
    test('패스워드는 8자리 이상 12자리 이하여야한다.', () => {
      // given
      // when
      const validCases = ['test1234!', '123test!@#', '%%%1234test', 'TESTtest12!'];
      const inValidCases = ['', 'test12!', 'testtest', 'test!@#$', '!@#!@#$', '12345678'];

      // then
      checkTestCases(isPassword, validCases, true);
      checkTestCases(isPassword, inValidCases, false);
    });

    test('패스워드는 영문, 특수문자, 숫자 모두 최소 1개 이상으로 조합된 문자열만 가능하다.', () => {
      // given
      // when
      const validCases = ['testTEST12!@', '!@12testTEST', 'test123!@', '123test!@'];
      const inValidCases = ['~!@#$%^&*()', '12341234', 'testtest', 'TESTTEST', '테스트테스트!!', '테스트Test1234', 'Test1234', 'test!@#$'];

      // then
      checkTestCases(isPassword, validCases, true);
      checkTestCases(isPassword, inValidCases, false);
    });
  });

  describe('isName() test', () => {
    test('이름은 2자 이상이여야 한다.', () => {
      // given
      // when
      const validCases = ['김훈', '홍길동', '모나리자'];
      const inValidCases = ['', '김'];

      // then
      checkTestCases(isName, validCases, true);
      checkTestCases(isName, inValidCases, false);
    });

    test('이름은 한글로 조합된 문자열만 가능하다.', () => {
      // given
      // when
      const validCases = ['김훈', '홍길동', '모나리자'];
      const inValidCases = ['', 'name', 'NAME', '김name', '1234', '김1234', '!@#$', '김!@#$#'];

      // then
      checkTestCases(isName, validCases, true);
      checkTestCases(isName, inValidCases, false);
    });
  });

  describe('isNickname() test', () => {
    test('닉네임은 1자 이상이어야한다.', () => {
      // given
      // when
      const validCases = ['김훈', '홍길동', '모나리자'];
      const inValidCases = [''];

      // then
      checkTestCases(isNickname, validCases, true);
      checkTestCases(isNickname, inValidCases, false);
    });

    test('닉네임은 영문, 한글, 숫자로 조합된 문자열만 가능하다.', () => {
      // given
      // when
      const validCases = ['김훈', 'name', 'NAME', '김name', '1234', '김1234'];
      const inValidCases = ['', '!@#$', '김!@#$#'];

      // then
      checkTestCases(isNickname, validCases, true);
      checkTestCases(isNickname, inValidCases, false);
    });
  });

  describe('isGrade() test', () => {
    test('학년은 1학년 ~ 4학년까지만 존재한다.', () => {
      // given
      // when
      const validCases = ['1', '2', '3', '4'];
      const inValidCases = ['', '12', '6', '8'];

      // then
      checkTestCases(isGrade, validCases, true);
      checkTestCases(isGrade, inValidCases, false);
    });
  });

  describe('isMajor() test', () => {
    test('전공은 한글로 조합된 문자열만 가능하다.', () => {
      // given
      // when
      const validCases = ['컴퓨터공학부', '산업경영학부', '기계공학부'];
      const inValidCases = ['124', '', '!@#$', '김!@#$#'];

      // then
      checkTestCases(isMajor, validCases, true);
      checkTestCases(isMajor, inValidCases, false);
    });
  });
});
