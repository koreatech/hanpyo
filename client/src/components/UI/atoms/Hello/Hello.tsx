import React from 'react';
import { testcalc } from '@/common/utils';

type HelloProps = {
  name: string;
  big?: boolean;
  count: number;
  onHello?: () => void;
  onBye?: () => void;
};

const Hello = ({ name, big, count, onHello, onBye }: HelloProps): JSX.Element => {
  testcalc.add(1, 2);

  return (
    <div>
      {big ? (
        <h1>
          안녕하세요, {name}! {`${testcalc.add(count, count)}`}
        </h1>
      ) : (
        <p>
          안녕하세요, {name}! {`${count}`}
        </p>
      )}
      <div>
        <button type="button" onClick={onHello}>
          Hello
        </button>
        <button type="button" onClick={onBye}>
          Bye
        </button>
      </div>
    </div>
  );
};

Hello.defaultProps = {
  big: false,
};

export { Hello };
export type { HelloProps };
