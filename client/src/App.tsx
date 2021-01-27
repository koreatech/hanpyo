import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
