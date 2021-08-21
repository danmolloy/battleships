import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

interface GameState {
  inGame: boolean | 'idle',
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
    toggleInGame: state => {
      if (state.inGame === 'idle' || 
        state.inGame === false) {
        state.inGame = true
      } else if (state.inGame === true) {
        state.inGame = false
      }
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