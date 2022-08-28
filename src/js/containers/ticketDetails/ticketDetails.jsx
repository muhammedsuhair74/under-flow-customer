/* eslint-disable import/no-extraneous-dependencies */
import { Tooltip, tooltipClasses } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { QRCode } from 'react-qr-svg';
import { styled } from '@mui/material/styles';
import { useHistory } from 'react-router-dom';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import moment from 'moment';

import styles from './styles.scss';


const state = { title: 'Coldplay India Tour Kochi',
  time: '07:00pm',
  location: 'Vanitha Veneetha CINEPLEX RGB LASER 4K3D:Edappally',
  date: '16-Aug-2022',
  quantity: 3,
  wallet: '76xmaBZSx81wlwkkj1' };


const NameTooltip = styled(({ className, ...props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'black',
    color: 'white',
    maxWidth: 200,
    fontSize: 18,
    border: '1px solid #dadde9',
    borderRadius: 20
  }
}));

const TicketDetails = (props) => {
  const { eventDetails } = props;
  const [ticketDetails, setTicketDetails] = useState({});
  console.log(ticketDetails);

  const history = useHistory();
  useEffect(() => {
    const id = history.location.search.split('?')[1];
    const ticketDetailsFromApi = eventDetails?.filter((item) => item.id === parseInt(id, 10));
    setDetails(ticketDetailsFromApi);
  }, []);

  const setDetails = (details) => {
    setTicketDetails(details[0]);
  };

  return (
    <div className={styles.ticketwrapper}>
      <div className={styles.image}>
        <img className={styles.img} src={ticketDetails.imageUrl} alt="eventimage" />
      </div>
      <NameTooltip title={ticketDetails.title} enterTouchDelay={0}>
        <div className={`${styles.title} largeFont`}>
          {ticketDetails.title}
        </div>
      </NameTooltip>
      <div className={styles.topdetails}>
        <div className={`${styles.topdetailcontainer} font1`}>
          <div className={styles.date}>
            <CalendarMonthIcon className={styles.calenderIcon} style={{ fontSize: '.font1' }} />
            <div>
              {moment(ticketDetails.time).format('ddd, MMM DD, LT')}
            </div>
          </div>
          <div className={styles.location}>
            <LocationOnIcon className={styles.locationIcon} style={{ fontSize: '.font1' }} />
            <div>
              {ticketDetails.location}
            </div>
          </div>
        </div>
      </div>
      <hr className={styles.line} />
      <div className={`${styles.bookingdetails} largeFont`}>
          Booking Details
      </div>
      <div className={styles.bottomdetails}>
        <div className={`${styles.bottomdetailcontainer} font1`}>
          <div className={styles.wallet}>
            <img className={styles.walletIcon} src="assets/digital-wallet.png" alt="wallet" />
            <div>
              {ticketDetails.wallet}
            </div>
          </div>
          <div className={styles.count}>
            <img className={styles.countIcon} src="assets/bitcoin-ticket.png" alt="ticket" />
            <div>
              x
              {' '}
              {ticketDetails.quantity}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.qrContainer}>
        <div className={styles.text}>
          <div className={`${styles.admit} largeFont`}>
            ADMIT ONE
          </div>
        </div>
        <div className={styles.qr}>
          <QRCode
            level="Q"
            style={{ width: 200 }}
            value={JSON.stringify({ walletAddress: ticketDetails.wallet,
              contractAddress: ticketDetails.contractAddress })}
          />
        </div>
      </div>
    </div>
  );
};

export default TicketDetails;
