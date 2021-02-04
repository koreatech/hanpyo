import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from '@/common/styles';
import { Router } from './router';
import apollo from './apollo';

const App = (): JSX.Element => {
  return (
    <ApolloProvider client={apollo}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
