import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import PropTypes from 'prop-types';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function EventTile(props) {
  console.log(props);
  return (
    <Card variant="outlined" sx={{ minWidth: 320 }}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <img
            src={props.event.imageUrl}
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <Typography level="h2" sx={{ fontSize: 'md', mt: 2 }}>
        {props.event.title}
      </Typography>
      <Typography level="body2" sx={{ mt: 0.5, mb: 0.5 }}>
        <LocationOnIcon /> <span>{props.event.location}</span>
      </Typography>
      <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
        ₹ {props.event.fiatPrice}
      </Typography>
      <CardOverflow
        variant="soft"
        sx={{
          display: 'flex',
          gap: 1.5,
          py: 1.5,
          px: 'var(--Card-padding)',
          borderTop: '1px solid',
          borderColor: 'neutral.outlinedBorder',
          bgcolor: 'background.level1'
        }}
      >
        <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
          Sun, 11 Sep 11:00 am
        </Typography>
        <Box sx={{ width: 2, bgcolor: 'divider' }} />
      </CardOverflow>
    </Card>
  );
}

export default EventTile;


