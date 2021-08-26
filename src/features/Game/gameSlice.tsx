import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

export interface GameState {
  inGame: 'playing' | 'idle' | 'paused' | 'ended'
  turn: "CPU" | "Player" | null
}

const initialState: GameState = {
  inGame: 'idle',
  turn: null
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    toggleInGame: (state, action) => {
      state.inGame = action.payload
    },
    setTurn: state => {
      if (state.turn === null || 
          state.turn === "CPU") {
        state.turn = 'Player'
      } else {
        state.turn = 'CPU'
      }
    }
  }
})

export const { toggleInGame, setTurn } = gameSlice.actions
export default gameSlice.reducer