// import EventDetailModal from './modal';

// export default EventDetailModal;


import { connect } from 'react-redux';

import EventDetailModal from './ticketDetails';
import { fetchEventDetails } from './saga';
// import fetchDummyApi from './saga';

const mapStateToProps = ({ homePage, ticketDetails }) => ({
  ticketCount: homePage.ticketCount,
  ticketDetails: ticketDetails.ticketDetails
});

const mapDispatchToProps = () => ({
  fetchEventDetails
  // fetchDummyApi
});

export default connect(mapStateToProps, mapDispatchToProps)(EventDetailModal);
