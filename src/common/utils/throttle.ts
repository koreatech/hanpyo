/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-this-alias */
const throttle = (func: Function, wait: number): (() => void) => {
  let timeout: NodeJS.Timeout | null = null;

  return (...args: any[]): void => {
    const context = this;
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;
        func.apply(context, args);
      }, wait);
    }
  };
};

export default throttle;
