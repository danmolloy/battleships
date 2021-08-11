import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

interface GameState {
  inGame: boolean | "paused",
  turn: "CPU" | "player" | null
}

const initialState: GameState = {
  inGame: false,
  turn: null
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {}
})

export default gameSlice.reducer