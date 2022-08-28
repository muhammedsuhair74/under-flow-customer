import { connect } from 'react-redux';
import TicketListing from './ticketListing';
import { fetchTickets } from './saga';


const mapStateToProps = ({ fullEventDetails }) => ({
  eventDetails: fullEventDetails.ticketList
});

const mapDispatchToProps = () => ({
  fetchTickets
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketListing);
