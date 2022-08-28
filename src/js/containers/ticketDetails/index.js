import { connect } from 'react-redux';

import TicketDetails from './ticketDetails';

const mapStateToProps = ({ ticketDetails }) => ({
  eventDetails: ticketDetails.ticketList
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TicketDetails);
