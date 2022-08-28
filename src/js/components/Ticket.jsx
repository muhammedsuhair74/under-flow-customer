/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { Card, CardOverflow, CardContent, AspectRatio, Typography, CssVarsProvider } from '@mui/joy';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Ticket(props) {
  const {ticket} = props;
  return (
    <Card row variant='outlined' sx={{
      minWidth: '260px',
      gap: 2,
      bgcolor: 'background.body',
    }}>
      <CardOverflow>
        <AspectRatio ratio="1" sx={{ width: 145 }}>
          <img
            src={ticket.imageUrl}
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography fontWeight="md" textColor="success.plainColor" mb={0.5}>
          {ticket.title}
        </Typography>
        <Typography level="body2" sx={{ mt: 0.5, mb: 0.5 }}>
          <LocationOnIcon /> <span>{ticket.location}</span>
        </Typography>
        <Typography level="body2" sx={{ mt: 0.5, mb: 0.5 }}>
          $ {ticket.price}
        </Typography>
      </CardContent>
      <CardOverflow
        variant="soft"
        color="primary"
        sx={{
          px: 0.5,
          writingMode: 'vertical-rl',
          textAlign: 'center',
          fontSize: 'xs2',
          fontWeight: 'xl2',
          letterSpacing: '1px',
          textTransform: 'uppercase',
        }}
      >
        Admit One
      </CardOverflow>
    </Card>
  )
}

export default Ticket;
