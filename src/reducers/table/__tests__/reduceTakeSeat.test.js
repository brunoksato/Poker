const { takeSeat } = require('../../../actions');
const reducer = require('../tableReducer');

describe('takeSeat', () => {
  test('assign player to seat and increase activeSeatCount', () => {
    const state = {
      byId: {
        0: {
          seats: ['socket-1', 'socket-12'],
          activeSeatsCount: 2,
        },
      },
    };
    const newState = reducer(
      state,
      takeSeat({ playerId: 'socket-4', tableId: 0, seat: 4, chips: 500 })
    );
    expect(newState.byId[0].seats[4]).toEqual('socket-4');
    expect(newState.byId[0].activeSeatsCount).toEqual(3);
  });
});
