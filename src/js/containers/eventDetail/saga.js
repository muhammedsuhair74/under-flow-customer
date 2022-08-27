import apiCall from '../../sagas/api';
import { store } from '../../store';

export async function fetchDummyApi() {
  const url = '/5d8f5d433200000d00adec03';
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

export const fetchEventDetails = async (eventId) => {
  const url = `/events/${eventId}`;
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
    const ticketDetails = {};
    ticketDetails.apiResponse = response;
    ticketDetails.eventName = response.title;
    ticketDetails.eventDateTime = response.datetime;
    ticketDetails.eventLocation = response.location;
    ticketDetails.eventDetails = response.description;
    ticketDetails.eventCreators = [{
      creatorName: response.title,
      logo: 'assets/user.png'
    }];
    ticketDetails.eventAbout = response.title;
    ticketDetails.ticketPrice = response.fiatPrice;
    // ticketDetails.ticketPriceInEth = response.title;
    store.dispatch({ type: 'FETCH_TICKET_DETAILS', data: ticketDetails });
  }
};
