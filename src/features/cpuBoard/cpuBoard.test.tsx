import cpuShipsReducer, { 
  handleAttack, 
  updateSquares, 
  resetCPUBoard, 
  CPUBoardState
} from './cpuShipsSlice'
import { nanoid } from '@reduxjs/toolkit'

describe('cpuShips reducer', () => {
  const initialState: CPUBoardState = {
    CPUSquares: new Array(100).fill(null).map(i => (
      i = {
        id: nanoid(),
        val: null
      }
    )),
    boardSet: false,
    numAttacks: 0
  }

  it('should handle initial state', () => {
    const actual = cpuShipsReducer(undefined, {type: 'unknown'})
    for(let i = 0; i < actual.CPUSquares.length; i++) {
      expect(actual.CPUSquares[i].val).toBe(null)
      if (i > 0){
        expect(actual.CPUSquares[i].id).not.toEqual(actual.CPUSquares[i - 1].id)
      }
    }
    expect(actual.boardSet).toEqual(false)
    expect(actual.numAttacks).toEqual(0)
  })

  it('should handle handleAttack', () => {
    const actual = cpuShipsReducer(initialState, handleAttack(initialState.CPUSquares[55].id))
    expect(actual.CPUSquares[55].val).toBe('O')
  })

  it('should handle updateSquares', () => {
    const actual = cpuShipsReducer(initialState, updateSquares([50, 51]))
    expect(actual.CPUSquares[50].val).toBe('(2) PatrolBoat')
  })

  it('should handle resetCPUBoard', () => {
    const actual = cpuShipsReducer(initialState, resetCPUBoard());
    for(let i = 0; i < actual.CPUSquares.length; i ++) {
      expect(actual.CPUSquares[i].val).toBe(null)
    }
  })

})