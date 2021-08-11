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
  reducers: {}
})


export default cpuShipsSlice.reducer