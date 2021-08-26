import playerShipsReducer, { 
  updateSquares, 
  setCPUMove, 
  resetPlayerBoard, 
  PlayerBoardState 
} from './playerShipsSlice'
import { nanoid } from '@reduxjs/toolkit'

describe('playerShips reducer', () => {
  let arr = new Array(100).fill({id: 1, value: null})

  const initialState: PlayerBoardState = {
    PlayerSquares: arr,
    boardSet: false,
    numAttacks: 0,
    currentAttack: [],
    CPUMove: 'idle'
  }

  it('should handle initial state', () => {
    const actual = playerShipsReducer(undefined, {type: 'unknown'})
    for(let i = 0; i < actual.PlayerSquares.length; i++) {
      expect(actual.PlayerSquares[i].val).toBe(null)
      if (i > 0){
        expect(actual.PlayerSquares[i].id).not.toEqual(actual.PlayerSquares[i - 1].id)
      }
    }
    expect(actual.boardSet).toEqual(false)
    expect(actual.numAttacks).toEqual(0)
    expect(actual.currentAttack).toEqual([])
    expect(actual.CPUMove).toEqual('idle')
  })

  it('should handle updateSquares', () => {
    const actual = playerShipsReducer(initialState, updateSquares([1, 2, 3, 4, 5]));
    expect(actual.PlayerSquares[5].val).toBe('(5) Carrier')
  })

  it('should handle setCPUMove', () => {
    const actual = playerShipsReducer(initialState, setCPUMove('thinking'));
    expect(actual.CPUMove).toBe('thinking')
  })

  it('should handle resetPlayerBoard', () => {
    const actual = playerShipsReducer(initialState, resetPlayerBoard());
    for (let i = 0; i < actual.PlayerSquares.length; i++) {
      expect(actual.PlayerSquares[i].val).toBe(null)
    }
  })

})