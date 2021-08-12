import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { toggleInGame } from './gameSlice'

export const Header = () => {
  const turn = useAppSelector(state => state.game.turn)
  const inGame = useAppSelector(state => state.game.inGame)
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(toggleInGame())
  }

  return (
    <div className="header m-3" id="header">
      <h1>Battleships</h1>
      <button id="status-btn" 
      className="py-2 px-4 bg-green-500 
        text-white font-semibold rounded-lg 
        shadow-md hover:bg-green-700 focus:outline-none 
        focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
        onClick={handleClick}
      >
        {inGame ? 'Pause' : 'Start'}
      </button>
      <div className="status">
        {turn}
      </div>
    </div>
  )
}