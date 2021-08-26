import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit'
import type { RootState, AppThunk } from '../../app/store'
import { setShip } from '../Game/setShip'
import { BoardInfo } from '../Game/BoardInfo'
import { fetchMove } from './CPUMoves'

const shipArr = (arr: Array<{val: any, id: any}>) => {
  let returnArr: Array<string> = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].val !== null && 
      arr[i].val.length > 1 && 
      !returnArr.includes(arr[i].val)) {
        returnArr.push(arr[i].val)
      }
  } return returnArr;
}


export interface PlayerBoardState {
  PlayerSquares: Array<{val: any, id: any}>,
  boardSet: boolean,
  numAttacks: number,
  currentAttack: number[],
  CPUMove: 'idle'|'thinking' | 'complete',
}

const initialState: PlayerBoardState = {
  PlayerSquares: new Array(100).fill(null).map(i => (
    i = {
      id: nanoid(),
      val: null
    }
  )),
  boardSet: false,
  numAttacks: 0,
  currentAttack: [],
  CPUMove: 'idle'
}

export const AsyncMove = createAsyncThunk(
  'playerShips/fetchMove',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState
    const attackArr = state.playerShips.currentAttack
    const board = state.playerShips.PlayerSquares
    const response = await fetchMove(board, attackArr);
    return response.data
  }
)

export const playerShipsSlice = createSlice({
  name: 'playerShips',
  initialState,
  reducers: {
    updateSquares: (state, action) => {
      if (action.payload.length === 5) {
        for (let i=0; i < action.payload.length; i++) {
          state.PlayerSquares[action.payload[i]].val = '(5) Carrier'
        }
      } else if (action.payload.length === 4) {
        for (let i=0; i < action.payload.length; i++) {
          state.PlayerSquares[action.payload[i]].val = '(4) BattleShip'
        }
      } else if (action.payload.length === 3) {
        const checker = () => {
          for (let i = 0; i < state.PlayerSquares.length; i++) {
            if (state.PlayerSquares[i].val === "(3) Submarine") {
              return true
            }
          } return false
        }
        if (checker() === true) {
          for (let i=0; i < action.payload.length; i++) {
            state.PlayerSquares[action.payload[i]].val = '(3) Destroyer'
            }
        } else {
          for (let i=0; i < action.payload.length; i++) {
            state.PlayerSquares[action.payload[i]].val = '(3) Submarine'
            }
        }
      } else if (action.payload.length === 2) {
        for (let i=0; i < action.payload.length; i++) {
          state.PlayerSquares[action.payload[i]].val = '(2) PatrolBoat'
        }
      }
    },
    setCPUMove: (state, action) => {
      state.CPUMove = action.payload
    },
    resetPlayerBoard: (state) => {
      state.PlayerSquares = new Array(100).fill(null).map(i => (
        i = {
          id: nanoid(),
          val: null
        }
      ))
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(AsyncMove.pending, (state) => {
        state.CPUMove = 'thinking';
      })
      .addCase(AsyncMove.fulfilled, (state, action) => {
        const initialShipCount = shipArr(state.PlayerSquares)
        const square = action.payload
        if (state.PlayerSquares[square].val !== null) {
          state.PlayerSquares[square].val = 'X'
          if (shipArr(state.PlayerSquares).length === initialShipCount.length) {
            state.currentAttack.push(square);
            state.currentAttack.sort()
          } else {
            state.currentAttack = []
          }
        } else {
          state.PlayerSquares[square].val = 'O'
        }
        state.numAttacks += 1
        state.CPUMove = 'complete';
      })
  }
})

const getBoard = (state: RootState) => state.playerShips.PlayerSquares

export const setPlayerShips = (): AppThunk => (
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

export const { updateSquares, setCPUMove, resetPlayerBoard }  = playerShipsSlice.actions
export default playerShipsSlice.reducer