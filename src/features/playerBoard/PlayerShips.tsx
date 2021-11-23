import { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { AsyncMove, setCPUMove } from './playerShipsSlice'
import { setTurn } from '../Game/gameSlice'
import { BoardInfo } from '../Game/BoardInfo'

export const PlayerShips = () => {
  const [showShipsRemaining, setShowShipsRemaining] = useState(true)

  const squares = useAppSelector(state => state.playerShips.PlayerSquares)
  const attackCount = useAppSelector(state => state.playerShips.numAttacks)
  const turn = useAppSelector(state => state.game.turn)
  const CPUMove = useAppSelector(state => state.playerShips.CPUMove)
  const inGame = useAppSelector(state => state.game.inGame)

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (turn === "CPU" && CPUMove === "idle" && inGame === "playing") {
      handleShot()      
    } else if (CPUMove === "complete") {
      dispatch(setCPUMove('idle'))
    }
  })


  const renderedSquares = squares.map(i => 
    <div key={i.id} 
    className={i.val === "X" ? "square-hit" :"square"}>
      {i.val === null ? null : i.val.length > 1 ? "•" : i.val}
    </div>
    )

  const handleShot = async() => {
    if (turn !== "CPU") {
      return;
    }
      await(dispatch(AsyncMove()))
      dispatch(setTurn())
  }

  return (
    <div className="outer-board pb-1" id="player-ships">
      <h3>Player Ships</h3>
      <div className="inner-board">
        {renderedSquares}
      </div>
      {turn !== null && <BoardInfo 
        attackCount={attackCount} 
        showShipsRemaining={showShipsRemaining}
        squares={squares.slice()}
        showList={showShipsRemaining}
        showShips={() => setShowShipsRemaining(!showShipsRemaining)}
        whoAmI="CPU"
      />}
    </div>
  )
}