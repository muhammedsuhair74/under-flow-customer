import React, { useEffect, useState } from 'react';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Divider, Tooltip } from '@mui/material';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import { bookNow } from '../../metamaskConnect';

import styles from './styles.scss';
import { CssVarsProvider, Button, Typography, Sheet } from '@mui/joy';

import { deepmerge } from '@mui/utils';
import { experimental_extendTheme as extendMuiTheme } from '@mui/material/styles';
import colors from '@mui/joy/colors';
import {
  extendTheme as extendJoyTheme
} from '@mui/joy/styles';

const muiTheme = extendMuiTheme({
  // This is required to point to `var(--joy-*)` because we are using `CssVarsProvider` from Joy UI.
  cssVarPrefix: 'joy',
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: colors.blue[500]
        },
        grey: colors.grey,
        error: {
          main: colors.red[500]
        },
        info: {
          main: colors.purple[500]
        },
        success: {
          main: colors.green[500]
        },
        warning: {
          main: colors.yellow[200]
        },
        common: {
          white: '#FFF',
          black: '#09090D'
        },
        divider: colors.grey[200],
        text: {
          primary: colors.grey[800],
          secondary: colors.grey[600]
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: colors.blue[600]
        },
        grey: colors.grey,
        error: {
          main: colors.red[600]
        },
        info: {
          main: colors.purple[600]
        },
        success: {
          main: colors.green[600]
        },
        warning: {
          main: colors.yellow[300]
        },
        common: {
          white: '#FFF',
          black: '#09090D'
        },
        divider: colors.grey[800],
        text: {
          primary: colors.grey[100],
          secondary: colors.grey[300]
        }
      }
    }
  }
});


const joyTheme = extendJoyTheme();
// You can use your own `deepmerge` function.
// joyTheme will deeply merge to muiTheme.
const theme = deepmerge(muiTheme, joyTheme);

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
  const [ticketCount, setTicketCount] = useState(1);
  const subtractTicket = () => {
    if (ticketCount > 1) {
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
    <CssVarsProvider theme={theme}>
    <div className={`${styles.eventDetailsModal}`} role="presentation">
      <div className={styles.modalWrapper}>
        <div className={styles.eventDetailsModalImage}>
          <img src={ticketDetails.imageUrl} alt="" />
        </div>
        <ArrowBackIosIcon className={styles.backArrow} onClick={() => { history.push('/home'); }} />
        <div className={styles.title}>
          <Typography level="h4">
            {ticketDetails.eventName}
          </Typography>
        </div>
        <div className={styles.modalTitleWrapper}>
          <div className={styles.modalTitleTextWrapper}>
            <Typography level="body1" component="div" style={{ display: 'flex', alignItems: 'center' }} sx={{ mt: 2, mb: 2 }}>
              <LocationOnIcon /> 
              <span style={{ marginLeft: '5px'}}>{moment(ticketDetails.eventDateTime).format('ddd, MMM DD, LT')}</span>
            </Typography>
            <Typography level="body1" component="div" style={{ display: 'flex', alignItems: 'center' }} sx={{ mb: 2 }}>
              <CalendarTodayIcon />
              <span style={{ marginLeft: '5px' }}>{ticketDetails.eventLocation}</span>
            </Typography> 
          </div>
          <div className={styles.ticketCountButtons}>
            <div className={styles.bookButtonWrapper}>
              <Button className={`${styles.buttons} font1`} onClick={subtractTicket} variant="outlined">-</Button>
              {/* <button className={styles.buttons} onClick={() => { setTicketCount(ticketCount - 1); }} type="submit">-</button> */}
              <div className={`${styles.count}`}><Typography>{ticketCount}</Typography></div>
              <Button className={styles.buttons} onClick={addTicket} variant="outlined">+</Button>
              {/* <button className={styles.buttons} onClick={() => { setTicketCount(ticketCount + 1); }}onClick={() => { setTicketCount(ticketCount + 1); }} type="submit">+</button> */}
            </div>
          </div>
        </div>
        <Divider />
        <div className={styles.showMoreWrapper}>
          <Accordion className={styles.accordionMoreDetails}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ height: '30px' }}
            >
              <Typography sx={{fontVariant: "small-caps"}} level="h6" style={{ marginTop: '0px', marginBottom: '0px' }}>More Details</Typography>
            </AccordionSummary>
            <AccordionDetails className={styles.showMoreDetails}>
              <Typography>
                {ticketDetails.eventDetails}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className={styles.creatorWrapper}>
          <div className={styles.iconTextWrapper}>
            <Typography sx={{fontVariant: "small-caps"}} level="h6" className={`${styles.createdByText}`}>Created By</Typography>
            <div className={styles.creatorList}>
              {
                (ticketDetails.eventCreators).map((item) => (
                  <div style={{ fontSize: '24px' }} className={styles.creatorLogoWrapper}>
                    <img className={styles.creatorImage} src={`${item.logo}`} alt="" />
                    <Tooltip title={item.creatorName} enterTouchDelay={0}>
                      <div className={styles.creatorNameWrapper}>
                        <Typography style={{ marginBottom: '0px' }}>{item.creatorName}</Typography>
                      </div>
                    </Tooltip>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <Divider />
        <div className={styles.descriptionWrapper}>
          <div className={styles.descriptionTextWrapper}>
            <Typography sx={{fontVariant: "small-caps"}} level="h6" className={`${styles.aboutText}`}>About</Typography>
            <Typography className={`${styles.aboutTextDetails}`}>
              {ticketDetails.eventDetails}
            </Typography>
          </div>
        </div>
        <Sheet className={styles.pricePurchaseWrapper}>
          <div className={styles.priceListing}>
            <div className={styles.prices}>
              <Typography level="h4" sx={{fontWeight: 700}}>
                $
                {' '}
                {ticketDetails.ticketPrice * ticketCount}
              </Typography>
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
              size='lg'
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
        </Sheet>
      </div>
    </div>
    </CssVarsProvider>
    );
};

export default EventDetailModal;
