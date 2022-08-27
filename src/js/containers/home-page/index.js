import { connect } from 'react-redux';

import HomePage from './homePage';
import fetchTickets from './saga';

const mapStateToProps = ({ homePage }) => ({
  tickets: homePage.tickets,
  walletId: homePage.walletId
});

const mapDispatchToProps = () => ({
  fetchTickets
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
