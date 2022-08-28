import Immutable from 'seamless-immutable';

const defaultState = Immutable.flatMap({
  ticketList: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'TICKET_LIST_FETCH':
      return Immutable.merge(state, { ticketList: action.data });
    default:
      return state;
  }
};
