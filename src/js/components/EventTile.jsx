import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import PropTypes from 'prop-types';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import moment from 'moment';

function EventTile(props) {
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
      <Typography level="body2" component="div" style={{ display: 'flex', alignItems: 'center' }} sx={{ mt: 0.5, mb: 0.5 }}>
        <LocationOnIcon /> <span style={{ marginLeft: '5px'}}>{props.event.location}</span>
      </Typography>
      <Typography level="body2" style={{ display: 'flex', alignItems: 'center' }} sx={{ mt: 0.5, mb: 2 }}>
        <span style={{ marginLeft: '5px' }}>$</span>
        <span style={{ marginLeft: '5px' }}>{props.event.fiatPrice}</span>
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
          {moment(props.event.datetime).format('ddd, MMM DD, LT')}
        </Typography>
        <Box sx={{ width: 2, bgcolor: 'divider' }} />
        <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
          {props.event.capacity - props.event.totalSold} tickets remaining
        </Typography>
      </CardOverflow>
    </Card>
  );
}

export default EventTile;
