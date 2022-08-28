import React from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';

import HomePage from './containers/home-page';
import TicketDetails from './containers/ticketDetails';
import TicketListing from './containers/ticketListing';
import EventDetail from './containers/eventDetail';

export default (
  <div>
    <Route>
      <Switch>
        <Redirect from="/" to="/home" exact={true} />
        <Route path="/home" component={HomePage} exact={true} />
        <Route path="/event-details" component={EventDetail} exact={true} />
        <Route path="/ticket-listing" component={TicketListing} exact={true} />
        <Route path="/ticket-details" component={TicketDetails} exact={true} />
        <Route path="/" component={HomePage} exact={true} />
      </Switch>
    </Route>
  </div>
);
