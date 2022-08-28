import Immutable from 'seamless-immutable';

const defaultState = Immutable.flatMap({
  ticketList: []
});

export default (state = defaultState, action) => {
  debugger;
  switch (action.type) {
    case 'TICKET_LIST_FETCH':
      debugger;
      return Immutable.merge(state, { ticketList: action.data });
    default:
      return state;
  }
};
