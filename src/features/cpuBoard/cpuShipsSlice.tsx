import { createSlice, nanoid } from '@reduxjs/toolkit'
import type { RootState, AppThunk } from '../../app/store'
import { setShip } from '../Game/setShip'

interface CPUBoardState {
  CPUSquares: Array<{val: any, id: any}>,
  boardSet: boolean,
  numAttacks: number
}

const initialState: CPUBoardState = {
  CPUSquares: new Array(100).fill(null).map(i => (
    i = {
      id: nanoid(),
      val: null
    }
  )),
  boardSet: false,
  numAttacks: 0
}

export const cpuShipsSlice = createSlice({
  name: 'cpuShips',
  initialState,
  reducers: {
    updateSquares: (state, action) => {
      if (action.payload.length === 5) {
        for (let i=0; i < action.payload.length; i++) {
          state.CPUSquares[action.payload[i]].val = '(5) Carrier'
        }
      } else if (action.payload.length === 4) {
        for (let i=0; i < action.payload.length; i++) {
          state.CPUSquares[action.payload[i]].val = '(4) Battleship'
        }
      } else if (action.payload.length === 3) {
        const checker = () => {
          for (let i = 0; i < state.CPUSquares.length; i++) {
            if (state.CPUSquares[i].val === "(3) Submarine") {
              return true
            }
          } return false
        }
        if (checker() === true) {
          for (let i=0; i < action.payload.length; i++) {
            state.CPUSquares[action.payload[i]].val = '(3) Destroyer'
            }
        } else {
          for (let i=0; i < action.payload.length; i++) {
            state.CPUSquares[action.payload[i]].val = '(3) Submarine'
            }
        }
        
      } else if (action.payload.length === 2) {
        for (let i=0; i < action.payload.length; i++) {
          state.CPUSquares[action.payload[i]].val = '(2) PatrolBoat'
        }
      }
    },
    handleAttack: (state, action) => {
      const square = state.CPUSquares.find(square => square.id === action.payload)
      if (square?.val === null) {
        square.val = 'O'
      } else if (square?.val !== null && square !== undefined) {
        square.val = 'X'
      }
      state.numAttacks += 1
    },
    resetCPUBoard: (state) => {
      state.CPUSquares = new Array(100).fill(null).map(i => (
        i = {
          id: nanoid(),
          val: null
        }
      ))
    }
  }
})


const getBoard = (state: RootState) => state.cpuShips.CPUSquares

export const setCPUShips = (): AppThunk => (
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

export const { handleAttack, updateSquares, resetCPUBoard } = cpuShipsSlice.actions
export default cpuShipsSlice.reducer