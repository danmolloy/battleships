import { act, render } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import gameReducer, { toggleInGame, setTurn, GameState } from './gameSlice'
import { HighScores } from './Highscores.tsx/HighScores'
import { Header } from './Header'

let container: any = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove();
  container = null;
});

describe('game reducer', () => {
  const initialState: GameState = {
    inGame: 'idle',
    turn: null,
    highScores: null,
    status: 'idle',
    error: null
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

