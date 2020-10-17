import loadable from '@loadable/component';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = loadable(() => import('./modules/home/Home'));
const Properties = loadable(() => import('./modules/properties/Properties'));

export const Routes = () => (
  <Switch>
    <Route exact path='/'>
      <Home />
    </Route>
    <Route exact path='/properties'>
      <Properties />
    </Route>
  </Switch>
);
