import loadable from '@loadable/component';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { R_HOME, R_NOTFOUND, R_PROPERTIES } from './helpers/route-params';
import { BasicLayout } from './layouts/basic';

const Home = loadable(() => import('./modules/home/Home'));
const Properties = loadable(() => import('./modules/properties/Index'));

const NotFound = loadable(() => import('./modules/not-found/NotFound'));

export const Routes = () => (
  <BasicLayout>
    <Switch>
      <Route exact path={R_HOME}>
        <Home />
      </Route>
      <Route exact path={R_PROPERTIES}>
        <Properties />
      </Route>
      <Route path={R_NOTFOUND} component={NotFound} />
      <Redirect to={R_NOTFOUND} />
    </Switch>
  </BasicLayout>
);
