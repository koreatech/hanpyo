import React from 'react';
import { Hello } from '@/components/UI/atoms';
import { Header } from '@/components/UI/molecules';

const MainPage = (): JSX.Element => {
  return (
    <>
      <Header />
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
