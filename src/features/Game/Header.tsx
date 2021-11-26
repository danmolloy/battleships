import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { toggleInGame, setTurn, fetchScores } from './gameSlice'
import { useState, useEffect } from 'react'
import { setPlayerShips, resetPlayerBoard } from '../playerBoard/playerShipsSlice'
import { setCPUShips, resetCPUBoard } from '../cpuBoard/cpuShipsSlice'
import { HighScores } from './Highscores/HighScores'
import { Instructions } from './Instructions/Instructions'
import { NameForm } from './Highscores/NameForm'

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
      dispatch(fetchScores()) 
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
        className="header-btn bg-green-500 text-white hover:bg-green-600 focus:ring-green-400"
        onClick={handleClick}>
          {button}
        </button>
        <button onClick={() => setShowInstructions(!showInstructions)} 
        className="header-btn bg-blue-500 text-white hover:bg-blue-600 focus:ring-gray-500">
          Instructions
        </button>
        <button
        id="highscores-btn"
        className="header-btn bg-gray-200 text-gray-600 hover:bg-gray-300 focus:ring-gray-500"
        onClick={() => getScores()}>
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