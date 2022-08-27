import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


import { Card } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

import { Button } from 'app/components';

import styles from './styles.scss';

const HomePage = (props) => {
  const { fetchTickets, tickets, walletId } = props;
  const [isButtonClicked, toggleButtonClick] = useState(false);

  const fetchDummyApi = () => {
    props.fetchDummyApi();
    toggleButtonClick(true);
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  console.log(tickets);
  console.log(walletId);

  const { dummyData } = props;
  return (
    <div className={styles.container}>
      <div className={styles.headerBar}>
        <div className={styles.headerBar2}>
          <div>
            <img className={styles.underflowLogo} src="assets/underflow.png" alt="logo" />
          </div>
          <div className={styles.onYourMark}>On Your Mark!</div>
        </div>
        <div className={styles.searchBox}>
          <img className={styles.searchIcon} src="assets/search.svg" alt="search" />
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className={styles.walletContaier}>
        <div className={styles.walletDisplay}>
          <AccountBalanceWalletIcon className={styles.walletIcon} />
          Wallet
        </div>
      </div>
      <div className={styles.ticketWrapper}>
        {tickets.map((ticket) => (
          <div className={styles.ticketCardWrapper}>
            <Card className={styles.ticketCard}>
              <div className={styles.ticketContent} style={{ backgroundImage: `url(${ticket.imageUrl})` }}>
                <div className={styles.ticketDetailsWrapper}>
                  <div className={styles.ticketTitle}>{ticket.title}</div>
                  <div className={styles.ticketDetails}>
                    <div className={styles.ticketLocation} style={{ marginTop: '0px' }}>
                      <img className={styles.ticketDateIcon} src="assets/calendar.png" alt="calender" />
                      <span className={styles.ticketDate}>1/1/23</span>
                    </div>
                    <div className={styles.ticketLocation}>{`INR ${ticket.fiatPrice}`}</div>
                    <div className={styles.ticketLocation}>
                      <img className={styles.ticketLocationIcon} src="assets/location.png" alt="location" />
                      <span className={styles.ticketDate}>{ticket.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};


HomePage.propTypes = {
  fetchDummyApi: PropTypes.func.isRequired,
  dummyData: PropTypes.shape().isRequired
};

export default HomePage;
