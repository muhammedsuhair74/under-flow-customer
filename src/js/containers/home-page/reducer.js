import Immutable from 'seamless-immutable';
import {
  HOMEPAGE_DUMMY_DATA_FETCH_REQUEST,
  HOMEPAGE_DUMMY_DATA_FETCH_SUCCESS,
  HOMEPAGE_DUMMY_DATA_FETCH_FAIL
} from '../../actions';

const defaultState = Immutable.flatMap({
  dummyData: {},
  walletId: 'WalletId',
  tickets: []

});

export default (state = defaultState, action) => {
  switch (action.type) {
    case HOMEPAGE_DUMMY_DATA_FETCH_REQUEST:
      return Immutable.merge(state, { tickets: [] });

    case HOMEPAGE_DUMMY_DATA_FETCH_SUCCESS:
      return Immutable.merge(state, { tickets: action.data });

    case HOMEPAGE_DUMMY_DATA_FETCH_FAIL:
      return Immutable.merge(state, { tickets: [] });

    default:
      return state;
  }
};
