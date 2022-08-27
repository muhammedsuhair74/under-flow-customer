import React from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';

import HomePage from './containers/home-page';
import HomePage2 from './containers/ticketList';
import TicketListing from './containers/ticketListing';

export default (
  <div>
    <Route>
      <Switch>
        <Redirect from="/" to="/home" exact={true} />
        <Route path="/home" component={HomePage} exact={true} />
        <Route path="/home2" component={HomePage2} exact={true} />
        <Route path="/ticket-listing" component={TicketListing} exact={true} />
        <Route path="/" component={HomePage} exact={true} />
      </Switch>
    </Route>
  </div>
);
