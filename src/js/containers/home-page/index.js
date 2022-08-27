import { connect } from 'react-redux';

import HomePage from './homePage';
import fetchDummyApi from './saga';

const mapStateToProps = ({ homePage }) => ({
  dummyData: homePage.dummyData
});

const mapDispatchToProps = () => ({
  fetchDummyApi
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
