import apiCall from '../../sagas/api';
import { store } from '../../store';
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
    isAuthRequired: false // Remove this param, if authToken required
  };

  // Accept response if necessary with await
  const response = await apiCall(apiArgs);
  if (response) {
    store.dispatch({ type: HOMEPAGE_DUMMY_DATA_FETCH_SUCCESS, data: response });
  }
}
