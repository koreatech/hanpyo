import { testcalc } from '@/common/utils';

describe('Calculator Test', () => {
  describe('add() test', () => {
    test('x + y 값이 반환된다', () => {
      // given
      const x = 10;
      const y = 11;

      // when
      const result = testcalc.add(x, y);

      // then
      expect(result).toEqual(21);
    });
  });
});
