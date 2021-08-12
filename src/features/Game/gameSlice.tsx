import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

interface GameState {
  inGame: boolean,
  turn: "CPU" | "player" | null
}

const initialState: GameState = {
  inGame: false,
  turn: null
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    toggleInGame: state => {
      state.inGame = !state.inGame
    }
  }
})

export const { toggleInGame } = gameSlice.actions
export default gameSlice.reducer