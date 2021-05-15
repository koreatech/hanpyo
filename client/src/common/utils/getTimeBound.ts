const getTimeBoundByDay = (day: string) => {
  if (day === '월') return { start: 0, end: 1440 };
  if (day === '화') return { start: 1440, end: 2880 };
  if (day === '수') return { start: 2880, end: 4320 };
  if (day === '목') return { start: 4320, end: 5760 };
  if (day === '금') return { start: 5760, end: 7200 };
  if (day === '토') return { start: 7200, end: 8640 };
  return { start: 0, end: 8640 };
};

export { getTimeBoundByDay };
