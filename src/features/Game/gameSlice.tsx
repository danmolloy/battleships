import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export interface GameState {
  inGame: 'playing' | 'idle'| 'ended'
  turn: "CPU" | "Player" | null
  highScores: any
  status: "idle" | "loading" | "succeeded" | "failed"
  error: any
}

const initialState: GameState = {
  inGame: 'idle',
  turn: null,
  highScores: null,
  status: 'idle',
  error: null
}

export const fetchScores = createAsyncThunk("/api/get/users", async () => {
  const response = await axios.get("/api/get/users")
  return response.data.users
})

export const addPlayerData = createAsyncThunk('/api/post/users', async (playerData: {name: string, moves: number}) => {
    const response = await axios.post("/api/post/users", playerData)
    return response.data
  }
)

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
  },
  extraReducers(builder) {
    builder
      .addCase(fetchScores.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchScores.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.highScores = action.payload
      })
      .addCase(fetchScores.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(addPlayerData.fulfilled, (state, action) => {
        state.highScores = [...state.highScores, action.payload.user].sort((a, b) => a.moves - b.moves)
      })
  }
})

export const { toggleInGame, setTurn } = gameSlice.actions
export default gameSlice.reducer