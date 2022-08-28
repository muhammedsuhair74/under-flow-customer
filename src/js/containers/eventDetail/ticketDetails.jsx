import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
// import TodayIcon from '@material-ui/core/TodayIcon';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Tooltip } from '@mui/material';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import { bookNow } from '../../metamaskConnect';

import styles from './styles.scss';


const creators = [
  {
    creatorName: 'PVRasdasdadasdas',
    logo: 'assets/user.png'
  },
  {
    creatorName: 'PVR 1',
    logo: 'assets/user.png'
  }, {
    creatorName: 'PVR 3',
    logo: 'assets/user.png'
  }];

const EventDetailModal = (props) => {
  const { ticketDetails, fetchEventDetails } = props;
  const [ticketCount, setTicketCount] = useState(0);
  const subtractTicket = () => {
    if (ticketCount > 0) {
      setTicketCount(ticketCount - 1);
    }
  };

  const addTicket = () => {
    setTicketCount(ticketCount + 1);
  };

  useEffect(() => {
    const eventId = history.location.search.split('?')[1];
    fetchEventDetails(eventId);
  }, []);


  const history = useHistory();
  console.log(ticketDetails);
  return (
    <div className={`${styles.eventDetailsModal}`} role="presentation">
      <div className={styles.modalWrapper}>
        <div className={styles.eventDetailsModalImage}>
          <img src="assets/opera.jpeg" alt="" />
        </div>
        <ArrowBackIosIcon className={styles.backArrow} onClick={() => { history.push('/home'); }} />
        <div className={styles.title}>
          <p className={`${styles.titleText} largeFont`}>{ticketDetails.eventName}</p>
        </div>
        <div className={styles.modalTitleWrapper}>
          <div className={styles.modalTitleTextWrapper}>
            <div className={styles.dateTime}>
              <CalendarTodayIcon className={styles.calendarTodayIcon} />
              <p className={`${styles.dateTimeText} font1`}>{moment(ticketDetails.eventDateTime).format('ddd, MMM DD, LT')}</p>
            </div>
            <div className={styles.location}>
              <LocationOnIcon className={styles.locationIcon} />
              <p className={`${styles.locationText} font1`} style={{ alignSelf: 'center' }}>{ticketDetails.eventLocation}</p>
            </div>
          </div>
          <div className={styles.ticketCountButtons}>
            <div className={styles.bookButtonWrapper}>
              <Button className={`${styles.buttons} font1`} onClick={subtractTicket} variant="text">-</Button>
              {/* <button className={styles.buttons} onClick={() => { setTicketCount(ticketCount - 1); }} type="submit">-</button> */}
              <div className={`${styles.count} font1`}>{ticketCount}</div>
              <Button className={styles.buttons} onClick={addTicket} variant="text">+</Button>
              {/* <button className={styles.buttons} onClick={() => { setTicketCount(ticketCount + 1); }}onClick={() => { setTicketCount(ticketCount + 1); }} type="submit">+</button> */}
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.showMoreWrapper}>
          <Accordion className={styles.accordionMoreDetails}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ height: '30px' }}
            >
              <p className="largeFont" style={{ marginTop: '0px', fontWeight: '700', marginBottom: '0px' }}>More Details</p>
            </AccordionSummary>
            <AccordionDetails className={styles.showMoreDetails}>
              <p className="font1">
                {ticketDetails.eventDetails}
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className={styles.creatorWrapper}>
          <div className={styles.iconTextWrapper}>
            <p className={`${styles.createdByText} largeFont`}>Created By</p>
            <div className={styles.creatorList}>
              {
                (ticketDetails.eventCreators).map((item) => (
                  <div style={{ fontSize: '24px' }} className={styles.creatorLogoWrapper}>
                    <img className={styles.creatorImage} src={`${item.logo}`} alt="" />
                    <Tooltip title={item.creatorName} enterTouchDelay={0}>
                      <div className={styles.creatorNameWrapper}>
                        <p className="font1" style={{ marginBottom: '0px', fontWeight: '700' }}>{item.creatorName}</p>
                      </div>
                    </Tooltip>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.descriptionWrapper}>
          <div className={styles.descriptionTextWrapper}>
            <div className={`${styles.aboutText} largeFont`}>About</div>
            <p className={`${styles.aboutTextDetails} font1`}>
              {ticketDetails.eventAbout}
            </p>
          </div>
        </div>
        <div className={styles.pricePurchaseWrapper}>
          <div className={styles.priceListing}>
            <div className={styles.prices}>
              <p className="font1">Price in USD:</p>
              <p className="font1">
                {' '}
                $
                {' '}
                {ticketDetails.ticketPrice}
              </p>
            </div>
            {/* <div className={styles.prices}>
              <p className="font1">Price Eth:</p>
              <p className="font1">
                {ticketDetails.ticketPriceInEth}
                {' '}
                Eth
              </p>
            </div> */}
          </div>
          <div className={styles.buyNowButtonWrapper}>
            <Button
              className={`${styles.buyButton} font1`}
              variant="contained"
              onClick={() => {
                if (ticketCount > 0) {
                  bookNow(ticketDetails.apiResponse, ticketCount);
                } else {
                  alert('No of ticket selected is 0')
                }
              }}
            >
              Buy now
            </Button>
          </div>
        </div>
      </div>
    </div>);
};

export default EventDetailModal;
