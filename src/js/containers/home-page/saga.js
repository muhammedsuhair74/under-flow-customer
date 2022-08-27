import apiCall from '../../sagas/api';
import {
  HOMEPAGE_DUMMY_DATA_FETCH_REQUEST,
  HOMEPAGE_DUMMY_DATA_FETCH_SUCCESS,
  HOMEPAGE_DUMMY_DATA_FETCH_FAIL
} from '../../actions';

export default async function fetchTickets() {
  const url = '/events';
  const apiArgs = {
    API_CALL: {
      method: 'GET'
    },
    url,
    TYPES: {
      requestType: HOMEPAGE_DUMMY_DATA_FETCH_REQUEST,
      successType: HOMEPAGE_DUMMY_DATA_FETCH_SUCCESS,
      failureType: HOMEPAGE_DUMMY_DATA_FETCH_FAIL
    },
    isAuthRequired: false // Remove this param, if authToken required
  };

  // Accept response if necessary with await
  apiCall(apiArgs);
}
