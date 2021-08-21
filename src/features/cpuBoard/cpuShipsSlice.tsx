import { createSlice, nanoid } from '@reduxjs/toolkit'
import type { RootState, AppThunk } from '../../app/store'
import { setShip } from '../Game/setShip'

interface CPUBoardState {
  CPUSquares: Array<{val: any, id: any}>,
  boardSet: boolean,
  numAttacks: number
}

const initialState: CPUBoardState = {
  CPUSquares: new Array(100).fill({
    val: null,
    id: nanoid(),
  }),
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
    addAttack: state => {
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

export const { addAttack, updateSquares } = cpuShipsSlice.actions
export default cpuShipsSlice.reducer