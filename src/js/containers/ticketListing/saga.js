/* eslint-disable import/prefer-default-export */
import apiCall from '../../sagas/api';
import { store } from '../../store';

export const fetchTickets = async(accnt) => {
  const url = `/tickets?accountAddress=${accnt.toLowerCase()}`;
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
    const data = response?.map((item) => ({
      id: item.id,
      contractAddress: item.event.contractAddress,
      imageUrl: item.event.imageUrl,
      title: item.event.title,
      time: item.event.datetime,
      location: item.event.location,
      date: item.datetime,
      imageUrl: item.event.imageUrl,
      quantity: item.quantity,
      wallet: item.accountAddress,
      price: item.event.fiatPrice
    }));
    // data.fullApiResponse = response;
    store.dispatch({ type: 'TICKET_LIST_FETCH', data });
  }
};
