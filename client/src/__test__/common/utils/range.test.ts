import { range } from '@/common/utils';

describe('Range Test', () => {
  describe('range() test', () => {
    test('1 ~ 10 값을 반복할 수 있다.', () => {
      // given
      const start = 1;
      const end = 10;

      // when
      const iterator = range(start, end);

      // then
      const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      let count = 0;
      Array.from(iterator).forEach((num, idx) => {
        expect(num).toEqual(result[idx]);
        count++;
      });
      expect(count).toEqual(10);
    });

    test('1 ~ 10 값을 2씩 건너뛰어서 반복할 수 있다.', () => {
      // given
      const start = 1;
      const end = 10;
      const offset = 2;

      // when
      const iterator = range(start, end, offset);

      // then
      const result = [1, 3, 5, 7, 9];
      let count = 0;
      Array.from(iterator).forEach((num, idx) => {
        expect(num).toEqual(result[idx]);
        count++;
      });
      expect(count).toEqual(5);
    });

    test('0 ~ 30 값을 30씩 건너뛰어서 반복할 수 있다.', () => {
      // given
      const start = 0;
      const end = 30;
      const offset = 30;

      // when
      const iterator = range(start, end, offset);

      // then
      const result = [0, 30];
      let count = 0;
      Array.from(iterator).forEach((num, idx) => {
        expect(num).toEqual(result[idx]);
        count++;
      });
      expect(count).toEqual(2);
    });
  });
});
