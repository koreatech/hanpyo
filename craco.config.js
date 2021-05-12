/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const resolve = (arg) => path.resolve(__dirname, arg);

module.exports = () => {
  return {
    webpack: {
      alias: {
        '@': resolve('src'),
      },
    },
    jest: {
      configure: {
        moduleNameMapper: {
          '^@/(.*)$': '<rootDir>/src/$1',
        },
      },
    },
  };
};
