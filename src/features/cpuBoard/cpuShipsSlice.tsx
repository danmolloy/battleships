import { createSlice, nanoid } from '@reduxjs/toolkit'
import type { RootState, AppThunk } from '../../app/store'
import { setShip } from '../Game/setShip'

interface CPUBoardState {
  CPUSquares: Array<any>,
  boardSet: boolean,
  numAttacks: number
}

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

export const cpuShipsSlice = createSlice({
  name: 'cpuShips',
  initialState,
  reducers: {
    updateSquares: (state, action) => {
      for (let i=0; i < action.payload.length; i++) {
        state.CPUSquares[action.payload[i]].val = '•'
      }
    },
    handleAttack: (state, action) => {
      const square = state.CPUSquares.find(square => square.id === action.payload)
      if (square?.val === null) {
        square.val = 'O'
      } else if (square?.val !== null && square !== undefined) {
        square.val = 'X'
      }
      state.numAttacks += 1
    }
  }
})

const getBoard = (state: RootState) => state.cpuShips.CPUSquares

export const setCPUShips = (): AppThunk => (
  dispatch,
  getState
) => {
  let currentBoard = getBoard(getState())
  dispatch(updateSquares(setShip(5, currentBoard)))
  currentBoard = getBoard(getState())
  dispatch(updateSquares(setShip(4, currentBoard)))
  currentBoard = getBoard(getState())
  dispatch(updateSquares(setShip(3, currentBoard)))
  currentBoard = getBoard(getState())
  dispatch(updateSquares(setShip(3, currentBoard)))
  currentBoard = getBoard(getState())
  dispatch(updateSquares(setShip(2, currentBoard)))
}

export const { handleAttack, updateSquares } = cpuShipsSlice.actions
export default cpuShipsSlice.reducer