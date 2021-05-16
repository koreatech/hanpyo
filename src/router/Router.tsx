import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MainPage, ReviewPage, MyPage, ReviewWritePage } from '@/components/pages';
import { Header } from '@/components/UI/organisms';

function Router(): JSX.Element {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/reviewWrite" component={ReviewWritePage} />
        <Route exact path="/review" component={ReviewPage} />
        <Route exact path="/my" component={MyPage} />
        <Route path="/" component={MainPage} />
      </Switch>
    </>
  );
}

export default Router;
