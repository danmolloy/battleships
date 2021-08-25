import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { toggleInGame, setTurn } from './gameSlice'
import { useState, useEffect } from 'react'
import { setPlayerShips, resetPlayerBoard } from '../playerBoard/playerShipsSlice'
import { setCPUShips, resetCPUBoard } from '../cpuBoard/cpuShipsSlice'
import { HighScores } from './HighScores.js'

export const Header = () => {
  const [showScores, setShowScores] = useState(false)
  const [button, setButton] = useState('Start')

  const turn = useAppSelector(state => state.game.turn)
  const inGame = useAppSelector(state => state.game.inGame)

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (inGame === 'ended') {
      setShowScores(true)
      setButton('Reset')
    } 
  })

  const handleClick = () => {
    if (inGame === 'idle') {
      dispatch(setCPUShips())
      dispatch(setPlayerShips())
      dispatch(setTurn())
      dispatch(toggleInGame('playing'))
      setButton('Pause')
    } else if (inGame === 'playing') {
      dispatch(toggleInGame('paused'))
      setButton('Resume')
    } else if (inGame === 'paused') {
      dispatch(toggleInGame('playing'))
      setButton('Pause')
    } else if (inGame === 'ended') {
      dispatch(resetCPUBoard())
      dispatch(resetPlayerBoard())
      dispatch(toggleInGame('idle'))
      setButton('Start')
      setShowScores(false)
    }
  }

  return (
    <div className="header m-3" id="header">
      <h1>{inGame === 'ended' || inGame === 'idle' ? "Battleships" :`${turn} turn`}</h1>
      <div className="flex flex-col">
      <button id="status-btn" 
      className="py-2 px-4 bg-green-500 
        text-white font-semibold rounded-lg 
        shadow-md hover:bg-green-600 focus:outline-none 
        focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 m-1"
        onClick={handleClick}
      >
        {button}
      </button>
      <button
      className="py-2 px-4 bg-gray-200 
      text-gray-500 font-semibold rounded-lg 
      shadow-md hover:bg-gray-300 focus:outline-none 
      focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75 m-1"
      onClick={() => setShowScores(!showScores)}
      >
        High Scores
      </button>
      </div>
      {showScores &&
      <HighScores />}
    </div>
  )
}