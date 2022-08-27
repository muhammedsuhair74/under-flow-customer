import Immutable from 'seamless-immutable';
import reducer from '../reducer';

const defaultState = Immutable({
  dummyData: {}
});

describe('containers/home-page/reducers', () => {
  describe('state', () => {
    it('should export `reducer`', () => {
      expect(reducer)
        .toBeDefined();
    });

    it('should return the default state', () => {
      expect(reducer(undefined, {})).toEqual(defaultState);
    });
  });
  describe('actions', () => {
    describe('actions', () => {
      it('should handle HOMEPAGE:DUMMY_DATA:FETCH:REQUEST', () => {
        const resultState = reducer(defaultState, { type: 'HOMEPAGE:DUMMY_DATA:FETCH:REQUEST' });
        expect(resultState).toEqual({
          dummyData: {}
        });
      });
      it('should handle HOMEPAGE:DUMMY_DATA:FETCH:SUCCESS', () => {
        const data = {
          id: 'a123'
        };
        const resultState = reducer(defaultState, { type: 'HOMEPAGE:DUMMY_DATA:FETCH:SUCCESS', data });
        expect(resultState).toEqual({
          dummyData: data
        });
      });
      it('should handle HOMEPAGE:DUMMY_DATA:FETCH:FAIL', () => {
        const resultState = reducer(defaultState, { type: 'HOMEPAGE:DUMMY_DATA:FETCH:FAIL' });
        expect(resultState).toEqual({
          dummyData: {}
        });
      });
    });
  });
});
