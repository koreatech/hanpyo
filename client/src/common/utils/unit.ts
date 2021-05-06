const DEFAULT_FONT_SIZE = 16;

function toRem(pixel: number): number {
  const rem = pixel / DEFAULT_FONT_SIZE;

  return rem;
}

function toPixel(rem: number): number {
  const pixel = rem * DEFAULT_FONT_SIZE;

  return pixel;
}

export { toRem, toPixel };
