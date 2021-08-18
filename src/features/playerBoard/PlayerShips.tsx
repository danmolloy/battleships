import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { RootState } from '../../app/store'
import { setShip } from "../Game/setShip"
import { setAllShips, updateSquares, updateNumAttacks } from './playerShipsSlice'

export const PlayerShips = () => {
  const squares = useAppSelector((state: RootState) => state.playerShips.PlayerSquares)
  const attackCount = useAppSelector((state: RootState) => state.playerShips.numAttacks)
  const dispatch = useAppDispatch()

  const renderedSquares = squares.map(i => 
    <div key={i.id} 
    className="square">
      {i.val}
    </div>
    )
  
  const setBoard = () => {
   dispatch(setAllShips())
  }

  return (
    <div className="outer-board" id="player-ships">
      <h3>Player Ships</h3>
      <div className="inner-board">
        {renderedSquares}
      </div>
      <p>Attack count: {attackCount}</p>
      <button onClick={setBoard}>Set</button>
    </div>
  )
}