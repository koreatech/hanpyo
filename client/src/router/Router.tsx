import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MainPage, ReviewPage, MyPage } from '../components/pages';

function Router(): JSX.Element {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/review" component={ReviewPage} />
      <Route path="/my" component={MyPage} />
    </Switch>
  );
}

export default Router;
