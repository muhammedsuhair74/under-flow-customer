import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { CssVarsProvider, Button, Avatar, Typography } from '@mui/joy';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';

export default function Sidebar() {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Button variant='outlined' onClick={() => setOpen(true)}><MenuIcon /></Button>
      <Drawer
        anchor={"left"}
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box
          sx={{ width: 225 }}
          role="presentation"
          onClick={() => setOpen(false)}
        >
          <List>
            <Link className="link" to="/home" style={{ textDecoration: 'none' }}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Home"} />
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
          <List>
            <Link className="link" to="/ticket-listing" style={{ textDecoration: 'none' }}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <ConfirmationNumberIcon />
                  </ListItemIcon>
                  <ListItemText primary={"My Bookings"} />
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
        </Box>
      </Drawer>
    </div>
  );
}
