import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { toggleInGame, setTurn, fetchScores } from './gameSlice'
import { useState, useEffect } from 'react'
import { setPlayerShips, resetPlayerBoard } from '../playerBoard/playerShipsSlice'
import { setCPUShips, resetCPUBoard } from '../cpuBoard/cpuShipsSlice'
import { HighScores } from './Highscores.tsx/HighScores'
import { Instructions } from './Instructions'
import { NameForm } from './Highscores.tsx/NameForm'

export const Header = () => {
  const [showInstructions, setShowInstructions] = useState(false)
  const [showScores, setShowScores] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [button, setButton] = useState('Start')

  const turn = useAppSelector(state => state.game.turn)
  const inGame = useAppSelector(state => state.game.inGame)

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (inGame === 'ended') {
      setShowScores(true)
      setButton('Reset')
      setShowForm(true)
    } else if (inGame === 'playing') {
      setButton('Reset')
    } else if (inGame === 'idle') {
      setButton('Start')
    }
  }, [inGame])

  const handleClick = () => {
    if (inGame === 'idle') {
      dispatch(setCPUShips())
      dispatch(setPlayerShips())
      dispatch(setTurn())
      dispatch(toggleInGame('playing'))
    } else if (inGame === 'playing') {
      window.location.reload()
    } else if (inGame === 'ended') {
      dispatch(resetCPUBoard())
      dispatch(resetPlayerBoard())
      dispatch(toggleInGame('idle'))
      setShowScores(false)
    }
  }

  const getScores = () => {
    setShowScores(!showScores)
    dispatch(fetchScores()) 
  }

  return (
    <div className="header m-3" id="header">
        <h1 id="title" className="p-4">{inGame === 'ended' || inGame === 'idle' ? "Battleships" :`${turn} turn`}</h1>

      <div className="flex flex-col sm:flex-row items-center">
      <button id="status-btn" 
      className="py-2 px-4 bg-green-500  w-36
        text-white font-semibold rounded-lg 
        shadow-md hover:bg-green-600 focus:outline-none 
        focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 m-1"
        onClick={handleClick}
      >
        {button}
      </button>
      <button onClick={() => setShowInstructions(!showInstructions)} className="py-2 px-4 bg-blue-500 
      text-white font-semibold rounded-lg w-36
      shadow-md hover:bg-blue-600 focus:outline-none 
      focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75 m-1">
        Instructions
      </button>
      <button
      className="py-2 px-4 bg-gray-200 w-36
      text-gray-600 font-semibold rounded-lg 
      shadow-md hover:bg-gray-300 focus:outline-none 
      focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75 m-1"
      onClick={() => getScores()}
      >
        High Scores
      </button>
      </div>
      {showInstructions &&
      <Instructions close={() => setShowInstructions(false)}/>}
      {showScores && <HighScores />}
      {showForm && <NameForm hideForm={() => setShowForm(false)}/>}
    </div>
  )
}