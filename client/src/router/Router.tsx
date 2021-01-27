import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MainPage } from '../components/pages';

function Router(): JSX.Element {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
    </Switch>
  );
}

export default Router;
