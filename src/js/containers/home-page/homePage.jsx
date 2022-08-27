import React, { useState } from 'react';
import PropTypes from 'prop-types';


import { Card } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

import { Button } from 'app/components';

import styles from './styles.scss';

const HomePage = (props) => {
  const [isButtonClicked, toggleButtonClick] = useState(false);

  const fetchDummyApi = () => {
    props.fetchDummyApi();
    toggleButtonClick(true);
  };

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
        <div className={styles.ticketCardWrapper}>
          <Card className={styles.ticketCard}>
            <div className={styles.ticketContent} style={{ backgroundImage: 'url(assets/sunburn.jpeg)' }}>
              <div className={styles.ticketDetailsWrapper}>
                <div className={styles.ticketTitle}>Sunburn Festival</div>
                <div className={styles.ticketDetails}>
                  <div className={styles.ticketLocation} style={{ marginTop: '0px' }}>
                    <img className={styles.ticketDateIcon} src="assets/calendar.png" alt="calender" />
                    <span className={styles.ticketDate}>1/1/23</span>
                  </div>
                  <div className={styles.ticketLocation}>INR 5000</div>
                  <div className={styles.ticketLocation}>
                    <img className={styles.ticketLocationIcon} src="assets/location.png" alt="location" />
                    <span className={styles.ticketDate}>Goa</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className={styles.ticketCardWrapper}>
          <Card className={styles.ticketCard}>
            Ticket2
          </Card>
        </div>
        <div className={styles.ticketCardWrapper}>
          <Card className={styles.ticketCard}>
            Ticket3
          </Card>
        </div>
        <div className={styles.ticketCardWrapper}>
          <Card className={styles.ticketCard}>
            Ticket4
          </Card>
        </div>
      </div>
    </div>
  );
};


HomePage.propTypes = {
  fetchDummyApi: PropTypes.func.isRequired,
  dummyData: PropTypes.shape().isRequired
};

export default HomePage;
