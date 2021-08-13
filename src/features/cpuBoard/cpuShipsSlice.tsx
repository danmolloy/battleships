import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

interface CPUBoardState {
  CPUSquares: Array<null | string>,
  boardSet: boolean,
  numAttacks: number
}

const initialState: CPUBoardState = {
  CPUSquares: new Array(100).fill(null),
  boardSet: false,
  numAttacks: 0
}

export const cpuShipsSlice = createSlice({
  name: 'cpuShips',
  initialState,
  reducers: {
    handleAttack: (state, action) => {
      if (state.CPUSquares[action.payload] === null) {
        state.CPUSquares.splice(action.payload, 1, 'O')
      } else {
        state.CPUSquares.splice(action.payload, 1, 'X')
      }
    }
  }
})

export const { handleAttack } = cpuShipsSlice.actions
export default cpuShipsSlice.reducer