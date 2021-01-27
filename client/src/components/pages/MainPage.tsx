import React from 'react';
import { Hello } from '@/components/UI/atoms';

const MainPage = (): JSX.Element => {
  return (
    <>
      <Hello
        name="hellotest~"
        big
        count={10}
        onBye={() => {
          alert('bye~');
        }}
        onHello={() => {
          alert('Hello~');
        }}
      />
    </>
  );
};

export default MainPage;
