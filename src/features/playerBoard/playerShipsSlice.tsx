import { createSlice, nanoid } from '@reduxjs/toolkit'
import type { RootState, AppThunk } from '../../app/store'
import { setShip } from '../Game/setShip'


interface PlayerBoardState {
  PlayerSquares: Array<{val: any, id: any}>,
  boardSet: boolean,
  numAttacks: number,
  currentAttack: number[] | null
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
  currentAttack: null
}


export const playerShipsSlice = createSlice({
  name: 'playerShips',
  initialState,
  reducers: {
    updateSquares: (state, action) => {
      for (let i=0; i < action.payload.length; i++) {
        state.PlayerSquares[action.payload[i]].val = '•'
      }
    },
    handleAttack: (state, action) => {
      const square = state.PlayerSquares.find(square => square.id === action.payload)
      if (square?.val === null) {
        square.val = 'O'
      } else if (square?.val !== null && square !== undefined) {
        square.val = 'X'
      }
      state.numAttacks += 1
    }
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

export const { updateSquares, handleAttack }  = playerShipsSlice.actions
export default playerShipsSlice.reducer