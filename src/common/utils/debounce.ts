/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-this-alias */
const debounce = (func: Function, wait: number): (() => void) => {
  let timeout: NodeJS.Timeout | null;

  return (...args: any[]): void => {
    const context = this;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, wait);
  };
};

export default debounce;
