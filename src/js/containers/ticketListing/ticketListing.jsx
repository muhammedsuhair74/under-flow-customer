/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Card, CardContent } from '@mui/joy';

import styles from './styles.scss';

const state = [{ title: 'JGM', time: '10:30 am to 2:30 pm', location: 'Ernakulam', date: 'TUE 23 Aug', quantity: 3 },
  { title: 'RRR', time: '4:30 am to 7:30 pm', location: 'Ernakulam', date: 'TUE 25 Aug', quantity: 5 }];

const TicketListing = (props) => {
  return (
    <div className={styles.wrapper}>
      {state.map((item, index) => (
        <Card className={styles.card}>
          <CardContent>
            <div className={styles.tophalfcontainer}>
              <div className={styles.imagecontainer}>
                <img src="assets/logo.svg" alt="logo" />
              </div>
              <div className={styles.detailscontainer}>
                <div className={styles.title}>
                  {item.title}
                </div>
                <div className={styles.time}>
                  {item.time}
                </div>
                <div className={styles.location}>
                  <img src="assets/location.svg" alt="location" />
                  {item.location}
                </div>
              </div>
            </div>
            <div className={styles.bottomhalfcontainer}>
              <div className={styles.ticketdate}>
                {item.date}
              </div>
              <div className={styles.quantity}>
                    Quantity :
                {state[0].quantity}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TicketListing;
