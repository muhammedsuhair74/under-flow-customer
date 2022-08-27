import Immutable from 'seamless-immutable';

const defaultState = Immutable.flatMap({
  ticketDetails: {
    eventName: 'Opera Event',
    eventDateTime: 'Feb 12 2022 12:30:00 IST',
    eventLocation: 'Kochin',
    eventDetails: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissemalesuada lacus ex, sit amet blandit leo lobortis eget.',
    eventCreators: [{
      creatorName: 'PVRasdasdadasdas',
      logo: 'assets/user.png'
    },
    {
      creatorName: 'PVR 1',
      logo: 'assets/user.png'
    }, {
      creatorName: 'PVR 3',
      logo: 'assets/user.png'
    }],
    eventAbout: 'Hellop this is a description of the event..Hello this is a description of the event..Hellop this is a description of the event..Hellop this is a description of the event..',
    ticketPrice: '30',
    ticketPriceInEth: '.0002'
  }
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'FETCH_TICKET_DETAILS':
      return Immutable.merge(state, { ticketDetails: action.data });
    // case 'TICKET_COUNT_DECREMENT':
    //   return Immutable.merge(state, { ticketCount: state.ticketCount - 1 });
    default:
      return state;
  }
};
