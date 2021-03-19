import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from '@material-ui/core';
import { theme } from '@/common/styles';
import { StoreProvider, RootStore } from '@/stores';
import { Router } from './router';
import apollo from './apollo';

const rootStore = new RootStore();

const App = (): JSX.Element => {
  return (
    <ApolloProvider client={apollo}>
      <ThemeProvider theme={theme}>
        <StoreProvider value={rootStore}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </StoreProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
