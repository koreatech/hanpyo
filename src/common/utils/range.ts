class RangeIterable implements Iterable<number> {
  start: number;

  end: number;

  current: number;

  offset: number;

  constructor(start: number, end: number, offset: number) {
    this.start = start;
    this.end = end;
    this.offset = offset;
    this.current = this.start;
  }

  [Symbol.iterator]() {
    return {
      next: () => {
        const nextValue = this.current;
        this.current += this.offset;

        return { done: nextValue > this.end, value: nextValue };
      },
    };
  }
}

const range = (start: number, end: number, offset = 1): RangeIterable => {
  return new RangeIterable(start, end, offset);
};

export default range;
