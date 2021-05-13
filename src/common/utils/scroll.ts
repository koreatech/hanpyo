interface ScrollPositionType {
  scrollX: number;
  scrollY: number;
}

const calculateScrollHeight = (): number => {
  const scrollHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight,
  );

  return scrollHeight;
};

const calculateCurrentScrollPosition = (): ScrollPositionType => {
  const scrollPosition = {
    scrollX: window.pageXOffset,
    scrollY: window.pageYOffset,
  };

  return scrollPosition;
};

const isScrollToMiddle = (): boolean => {
  const scrollHeight = calculateScrollHeight();
  const middleScrollHeight = scrollHeight / 2;

  const { scrollY } = calculateCurrentScrollPosition();

  return middleScrollHeight <= scrollY;
};

const scrollDownToBottom = (): void => {
  const scrollHeight = calculateScrollHeight();

  window.scrollTo(0, scrollHeight);
};

export { calculateScrollHeight, calculateCurrentScrollPosition, isScrollToMiddle, scrollDownToBottom };
