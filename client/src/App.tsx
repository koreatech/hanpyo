import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { Router } from './router';
import apollo from './apollo';

const App = (): JSX.Element => {
  return (
    <ApolloProvider client={apollo}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
