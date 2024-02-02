/* eslint-disable @typescript-eslint/no-explicit-any */
import { useReactiveVar } from '@apollo/client';

interface State {
  [stateIndex: string]: any;
}

function useReactiveVars<T extends State>(state: State): T {
  return Object.keys(state).reduce((acc, cur) => {
    return { ...acc, [cur]: useReactiveVar(state[cur]) };
  }, {}) as T;
}

export default useReactiveVars;
