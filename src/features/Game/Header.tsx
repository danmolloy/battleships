import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { toggleInGame, setTurn } from './gameSlice'
import { useEffect } from 'react'
import { setPlayerShips } from '../playerBoard/playerShipsSlice'
import { setCPUShips } from '../cpuBoard/cpuShipsSlice'

export const Header = () => {
  const turn = useAppSelector(state => state.game.turn)
  const inGame = useAppSelector(state => state.game.inGame)
  const dispatch = useAppDispatch()

  const handleClick = () => {
    if (inGame === 'idle') {
      dispatch(setCPUShips())
      dispatch(setPlayerShips())
      dispatch(setTurn())
    }
    dispatch(toggleInGame())
  }

  return (
    <div className="header m-3" id="header">
      <h1>{turn === null ? "Battleships" : `${turn} turn`}</h1>
      <button id="status-btn" 
      className="py-2 px-4 bg-green-500 
        text-white font-semibold rounded-lg 
        shadow-md hover:bg-green-700 focus:outline-none 
        focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
        onClick={handleClick}
      >
        {inGame === 'idle' ? 'Start' : inGame ? 'Pause' : 'Resume'}
      </button>
      <div className="status">
      </div>
    </div>
  )
}