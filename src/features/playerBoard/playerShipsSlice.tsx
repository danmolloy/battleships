import { createAsyncThunk, createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
import type { AppDispatch, RootState, AppThunk } from '../../app/store'
import { setShip } from '../Game/setShip'
import { useAppSelector, useAppDispatch } from '../../app/hooks'


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

const getBoard = (state: RootState) => state.playerShips.PlayerSquares

export const setAllShips = (): AppThunk => (
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

export const { updateSquares, updateNumAttacks }  = playerShipsSlice.actions
export default playerShipsSlice.reducer