import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Add from '@mui/icons-material/Add';
import styles from './styles.scss';
import EventTile from '../../components/EventTile';
import { CssVarsProvider, Button, Avatar, Typography } from '@mui/joy';
import Sidebar from '../../components/Sidebar';
import { deepmerge } from '@mui/utils';
import { experimental_extendTheme as extendMuiTheme } from '@mui/material/styles';
import colors from '@mui/joy/colors';
import {
  extendTheme as extendJoyTheme,
} from '@mui/joy/styles';
import { connectWallet } from './metamaskConnect';

const muiTheme = extendMuiTheme({
  // This is required to point to `var(--joy-*)` because we are using `CssVarsProvider` from Joy UI.
  cssVarPrefix: 'joy',
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: colors.blue[500],
        },
        grey: colors.grey,
        error: {
          main: colors.red[500],
        },
        info: {
          main: colors.purple[500],
        },
        success: {
          main: colors.green[500],
        },
        warning: {
          main: colors.yellow[200],
        },
        common: {
          white: '#FFF',
          black: '#09090D',
        },
        divider: colors.grey[200],
        text: {
          primary: colors.grey[800],
          secondary: colors.grey[600],
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: colors.blue[600],
        },
        grey: colors.grey,
        error: {
          main: colors.red[600],
        },
        info: {
          main: colors.purple[600],
        },
        success: {
          main: colors.green[600],
        },
        warning: {
          main: colors.yellow[300],
        },
        common: {
          white: '#FFF',
          black: '#09090D',
        },
        divider: colors.grey[800],
        text: {
          primary: colors.grey[100],
          secondary: colors.grey[300],
        },
      },
    },
  },
});


const joyTheme = extendJoyTheme();
// You can use your own `deepmerge` function.
// joyTheme will deeply merge to muiTheme.
const theme = deepmerge(muiTheme, joyTheme);

const HomePage = (props) => {
  const [isButtonClicked, toggleButtonClick] = useState(false);
  const [accAddress, setAccAddress] = useState()

  const fetchDummyApi = () => {
    props.fetchDummyApi();
    toggleButtonClick(true);
  };

  const onClickConnect = async () => {
    const accountAddress = await connectWallet()
    setAccAddress(accountAddress)
  }

  const formatAccAddress = address => `${address.slice(0, 7)}...${address.slice(-5)}`

  const { dummyData } = props;
  return (
    <CssVarsProvider theme={theme}>
    <div className={styles.container}>
      <div className={styles.headerBar}>
        <Avatar className={styles.underflowLogo} />
        <Typography level="h2" className={styles.brandName}>spotlight</Typography>
        <Sidebar />
      </div>
      <div className={styles.walletContaier}>
        {
          !!accAddress 
          ? <div className={styles.addressContainer}>
              <img src="https://static.yh.io/images/metamask-fox.svg" alt="indicator" />
              {formatAccAddress(accAddress)}
            </div>
          : <Button variant='outlined' fullWidth startIcon={<Add />} onClick={onClickConnect}>Connect to Wallet</Button>
        }
      </div>
      <div className={styles.ticketWrapper}>
        <div className={styles.ticketCardWrapper}>
        <EventTile />
        </div>
        <div className={styles.ticketCardWrapper}>
        <EventTile />
        </div>
        <div className={styles.ticketCardWrapper}>
        <EventTile />
        </div>
        <div className={styles.ticketCardWrapper}>
        <EventTile />
        </div>
      </div>
    </div>
    </CssVarsProvider>
  );
};


HomePage.propTypes = {
  fetchDummyApi: PropTypes.func.isRequired,
  dummyData: PropTypes.shape().isRequired
};

export default HomePage;
