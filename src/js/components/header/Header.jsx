import React, { useState, useEffect } from 'react';
import { CssVarsProvider, Button, Avatar, Typography } from '@mui/joy';
import styles from './styles.scss';
import Sidebar from '../Sidebar';
import Add from '@mui/icons-material/Add';
import { connectWallet, getCurrentAccount } from '../../metamaskConnect';
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

function Header() {
  const [accAddress, setAccAddress] = useState();
  const formatAccAddress = (address) => `${address.slice(0, 7)}...${address.slice(-5)}`;
  const onClickConnect = async () => {
    const accountAddress = await connectWallet();
    setAccAddress(accountAddress);
  };
  useEffect(() => {
    getCurrentAccount().then(currentAccount => {
      if (currentAccount) {
        setAccAddress(currentAccount)
      }
    })
  }, [])

  return (
    <CssVarsProvider theme={theme}>
      <div className={styles.headerBar}>
        <Avatar className={styles.underflowLogo} src="/asset/bitcoin-ticket.png" />
        <Typography color='info' level="h2" className={styles.brandName}>spotlight</Typography>
        <Sidebar />
      </div>
      <div className={styles.walletContaier}>
        {
        accAddress
          ? <div className={styles.addressContainer}>
            <img src="https://static.yh.io/images/metamask-fox.svg" alt="indicator" />
            {formatAccAddress(accAddress)}
          </div>
          : <Button variant="outlined" fullWidth={true} startIcon={<Add />} onClick={onClickConnect}>Connect to Wallet</Button>
      }
      </div>
    </CssVarsProvider>
  )
}

export default Header;
