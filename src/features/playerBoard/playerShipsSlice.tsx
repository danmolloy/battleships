import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

interface PlayerBoardState {
  PlayerSquares: Array<null | string>,
  boardSet: boolean,
  numAttacks: number,
  currentAttack: number[] | null
}

const initialState: PlayerBoardState = {
  PlayerSquares: new Array(100).fill(null),
  boardSet: false,
  numAttacks: 0,
  currentAttack: null
}


export const playerShipsSlice = createSlice({
  name: 'playerShips',
  initialState,
  reducers: {
    updateSquares: (state, action) => {
      for (let i = 0; i < action.payload.length; i++) {
        state.PlayerSquares.splice(action.payload[i], 1, 'X')
      }
    }
  }
})

export const { updateSquares }  = playerShipsSlice.actions
export default playerShipsSlice.reducer