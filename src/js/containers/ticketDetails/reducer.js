import Immutable from 'seamless-immutable';

const defaultState = Immutable.flatMap({
  dummyData: { title: 'Coldplay India Tour Kochi',
    time: '07:00pm',
    location: 'Vanitha Veneetha CINEPLEX RGB LASER 4K3D:Edappally',
    date: '16-Aug-2022',
    quantity: 3,
    wallet: '76xmaBZSx81wlwkkj1' }
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
