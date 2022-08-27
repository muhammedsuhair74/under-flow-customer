import React from 'react';

describe('containers/home-page/index', () => {
  let mockConnect;
  const expectedContainerElement = {};

  beforeEach(() => {
    jest.resetModules();
    jest.unmock('seamless-immutable');
    const wrapWithConnect = jest.fn(() => expectedContainerElement);
    mockConnect = jest.fn(() => wrapWithConnect);
    jest.mock('react-redux', () => ({ connect: mockConnect }));
    jest.mock('../homePage', () => (<div />));
  });

  it('should call connect', () => {
    require('../index'); // eslint-disable-line global-require
    expect(mockConnect).toBeCalled();
  });
  describe('connect function', () => {
    describe('mapStateToProps function', () => {
      beforeEach(() => {
        require('../index'); // eslint-disable-line global-require
      });
      it('should be an argument', () => {
        const mapStateToProps = mockConnect.mock.calls[0][0];

        expect(mapStateToProps).toBeDefined();
        expect(mapStateToProps).toBeInstanceOf(Function);
      });
      it('should be fired', () => {
        const mapStateToProps = mockConnect.mock.calls[0][0];

        const state = {
          homePage: {
            dummyData: {}
          }
        };
        const result = mapStateToProps(state);
        expect(result).toEqual({
          dummyData: {}
        });
      });
    });
    describe('mapDispatchToProps function', () => {
      beforeEach(() => {
        require('../index'); // eslint-disable-line global-require
      });
      it('should be an argument', () => {
        const mapDispatchToProps = mockConnect.mock.calls[0][1];

        expect(mapDispatchToProps).toBeDefined();
        expect(mapDispatchToProps).toBeInstanceOf(Function);
        expect(mapDispatchToProps.name).toBe('mapDispatchToProps');
      });
      it('should fire fetchDummyApi', () => {
        const mapDispatchToProps = mockConnect.mock.calls[0][1];
        const props = mapDispatchToProps();

        expect(props).toBeDefined();
        expect(props.fetchDummyApi).toBeDefined();
      });
    });
  });
});
