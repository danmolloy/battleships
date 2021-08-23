import { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { RootState } from '../../app/store'
import { setPlayerShips, updateSquares, handleAttack } from './playerShipsSlice'

export const PlayerShips = () => {
  const [shipsArr, setShipsArr] = useState([])
  const squares = useAppSelector((state: RootState) => state.playerShips.PlayerSquares)
  const attackCount = useAppSelector((state: RootState) => state.playerShips.numAttacks)
  const dispatch = useAppDispatch()

  const renderedSquares = squares.map(i => 
    <div key={i.id} 
    className="square">
      {i.val}
    </div>
    )
  
  useEffect(() => {
    shipsRemaining()
  })
  
  const shipsRemaining = () => {
    
  }

  const handleShot = () => {
    let randIndex = Math.floor(Math.random() * 100)
    while (squares[randIndex].val === 'O' || squares[randIndex].val === "X") {
      randIndex = Math.floor(Math.random() * 100)
    }
    dispatch(handleAttack(squares[randIndex].id))
  }

  return (
    <div className="outer-board" id="player-ships">
      <h3>Player Ships</h3>
      <div className="inner-board">
        {renderedSquares}
      </div>
      <p>Attack count: {attackCount}</p>
      {shipsArr.length > 0 && 
      <p>Ships Remaining: {shipsArr}</p>}
      <button onClick={handleShot}>Attack!</button>
    </div>
  )
}