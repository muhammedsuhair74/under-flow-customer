import { connect } from 'react-redux';

import TicketDetails from './ticketDetails';

const mapStateToProps = ({ fullEventDetails }) => ({ eventDetails: fullEventDetails.ticketList });

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TicketDetails);
