import { toPixel, toRem } from '@/common/utils/unit';

describe('Unit Util Test', () => {
  describe('toRem() test', () => {
    test('Pixel 값을 Rem 값으로 변경할 수 있다.', () => {
      // given
      const pixel = 16;

      // when
      const rem = toRem(pixel);

      // then
      expect(rem).toEqual(1);
    });
  });
  describe('toPixel() test', () => {
    test('Rem 값을 Pixel 값으로 변경할 수 있다.', () => {
      // given
      const rem = 1;

      // when
      const pixel = toPixel(rem);

      // then
      expect(pixel).toEqual(16);
    });
  });
});
