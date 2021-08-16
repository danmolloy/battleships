import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'


interface PlayerBoardState {
  PlayerSquares: Array<{val: null | string, id: any}>,
  boardSet: boolean,
  numAttacks: number,
  currentAttack: number[] | null
}

const initialState: PlayerBoardState = {
  PlayerSquares: new Array(100).fill({
    val: null,
    id: nanoid(),
  }),
  boardSet: false,
  numAttacks: 0,
  currentAttack: null
}


export const playerShipsSlice = createSlice({
  name: 'playerShips',
  initialState,
  reducers: {
    updateSquares: (state, action) => {
      for(let i=0; i < action.payload.length; i++) {
        state.PlayerSquares[action.payload[i]].val = '•'
      }
    },
    updateNumAttacks: (state) => {
      state.numAttacks = state.numAttacks + 1
    }
  }
})

export const { updateSquares, updateNumAttacks }  = playerShipsSlice.actions
export default playerShipsSlice.reducer