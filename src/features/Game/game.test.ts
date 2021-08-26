import gameReducer, { toggleInGame, setTurn, GameState } from './gameSlice'

describe('game reducer', () => {
  const initialState: GameState = {
    inGame: 'idle',
    turn: 'Player',
  }
  
  it('should handle initial state', () => {
    expect(gameReducer(undefined, {type: "unknown"})).toEqual({
      inGame: 'idle',
      turn: null,
    });
  });

  it('should handle toggleInGame', () => {
    const actual = gameReducer(initialState, toggleInGame('playing'))
    expect(actual.inGame).toEqual('playing')
  })

  it('should handle setTurn', () => {
    const actual = gameReducer(initialState, setTurn())
    expect(actual.turn).toEqual('CPU')
  })

});