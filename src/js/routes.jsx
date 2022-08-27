import React from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';

import HomePage from './containers/home-page';
import TicketListing from './containers/ticketListing';
import TicketDetails from './containers/ticketDetails/ticketDetails';

export default (
  <div>
    <div>
      <Link className="link" to="/home" style={{ textDecoration: 'none' }}>Home</Link>
      <Link
        className="link"
        style={{
          fontSize: '17px',
          textDecoration: 'none',
          marginLeft: '20px'
        }}
        to="/ticket-listing">
        My Bookings
      </Link>
      <Link
        className="link"
        style={{
          fontSize: '17px',
          textDecoration: 'none',
          marginLeft: '20px'
        }}
        to="/ticket-details">
        Ticket Details
      </Link>
    </div>
    <Route>
      <Switch>
        <Redirect from="/" to="/home" exact={true} />
        <Route path="/home" component={HomePage} exact={true} />
        <Route path="/ticket-listing" component={TicketListing} exact={true} />
        <Route path="/ticket-details" component={TicketDetails} exact={true} />
        <Route path="/" component={HomePage} exact={true} />
      </Switch>
    </Route>
  </div>
);
