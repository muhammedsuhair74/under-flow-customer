import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import PropTypes from 'prop-types';
import LocationOnIcon from '@mui/icons-material/LocationOn';

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
          bgcolor: 'background.level1',
        }}
      >
        <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
          Sun, 11 Sep 11:00 am
        </Typography>
        <Box sx={{ width: 2, bgcolor: 'divider' }} />
        <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
          5 tickets left
        </Typography>
      </CardOverflow>
    </Card>
  );
}

EventTile.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    fiatPrice: PropTypes.string,
    datetime: PropTypes.any,
    location: PropTypes.string
  }),
  onClick: PropTypes.func
};

EventTile.defaultProps = {
  event: {
    title: "Sunburn Festival",
    imageUrl: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?crop=entropy&auto=format&fit=crop&w=3270",
    fiatPrice: "1500",
    datetime: "2016-03-26T15:10:10.000Z",
    location: "Goa"
  },
  onClick: () => { }
};

export default EventTile;


