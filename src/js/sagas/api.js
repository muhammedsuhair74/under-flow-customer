import axios from 'axios';
import { replace as replaceRouter } from 'react-router-redux';
import registry from 'app-registry';
import { store } from '../store';

const isAuthTokenValid = (authToken) => (authToken !== null && authToken !== '');

export default async function apiCall(payload) {
  const {
    API_CALL,
    TYPES,
    url,
    isAuthRequired = false
  } = payload;

  // Reading API configs from config/env
  // const { apiEndpoint, apiVersion } = registry.get('config');
  // http://192.168.1.218:1337/events
  const API_URL = `http://192.168.1.218:1337${url}`;

  // Reading auth-token from cookie
  // const authToken = isAuthRequired && (registry.get('storage').getCookie('auth-token'));

  // Re-routing to login if not authorized
  // if (isAuthRequired && !isAuthTokenValid(authToken)) {
  //   store.dispatch(replaceRouter('/login'));
  //   return null;
  // }

  // Setting API parameters
  const apiParams = {
    ...API_CALL,
    url: API_URL
  };

  try {
    //  Setting initial state
    if (TYPES.requestType) {
      store.dispatch({ type: TYPES.requestType });
    }
    // Make API call
    const apiResponse = await axios(apiParams);
    if (apiResponse.data) {
      // API call success
      store.dispatch({ type: TYPES.successType, data: apiResponse.data });
      return apiResponse.data;
    }
  } catch (err) {
    // API call failure
    let errMessage = err.message;
    if (err.response) {
      errMessage = err.response.data.message || err.response.data.error.message;
    }
    // Logging the error
    registry.get('logger').info(`The API ${API_URL} returned this error:`, JSON.stringify(errMessage));
    store.dispatch({ type: TYPES.failureType });
  }
  return null;
}
