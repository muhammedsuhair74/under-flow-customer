import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Add from '@mui/icons-material/Add';
import { CssVarsProvider, Button, Avatar, Typography } from '@mui/joy';
import Sidebar from '../../components/Sidebar';
import EventTile from '../../components/EventTile';
import styles from './styles.scss';
import { connectWallet } from '../../metamaskConnect';
import Header from '../../components/header/Header';

const HomePage = (props) => {
  const { fetchTickets, tickets, walletId } = props;
  const [isButtonClicked, toggleButtonClick] = useState(false);

  // const fetchDummyApi = () => {
  //   props.fetchDummyApi();
  //   toggleButtonClick(true);
  // };

  const history = useHistory();

  useEffect(() => {
    fetchTickets();
  }, []);

  tickets.map((ticket) => console.log(ticket));
  console.log(walletId);

  const { dummyData } = props;
  return (
    <CssVarsProvider>
      <div className={styles.container}>
        <Header />
        <div className={styles.ticketWrapper}>
          {tickets.map((ticket) => {
            return (
              <div className={styles.ticketCardWrapper} onClick={() => history.push(`/event-details?${ticket.id}`)} role="presentation">
                <EventTile event={ticket} />
              </div>
            );
          })}
        </div>
      </div>
    </CssVarsProvider>
  );
};

export default HomePage;
