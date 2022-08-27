import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import HomePage from './containers/home-page';

export default (
  <Route>
    <Switch>
      <Redirect from="/" to="/home" exact={true} />
      <Route path="/home" component={HomePage} exact={true} />
    </Switch>
  </Route>
);
