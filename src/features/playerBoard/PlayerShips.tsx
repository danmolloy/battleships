import { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { RootState } from '../../app/store'
import { setPlayerShips, updateSquares, handleAttack, AsyncMove } from './playerShipsSlice'
import { setTurn } from '../Game/gameSlice'
import { BoardInfo } from '../Game/BoardInfo'

export const PlayerShips = () => {
  const [showShipsRemaining, setShowShipsRemaining] = useState(false)

  const squares = useAppSelector((state: RootState) => state.playerShips.PlayerSquares)
  const attackCount = useAppSelector((state: RootState) => state.playerShips.numAttacks)
  const turn = useAppSelector((state: RootState) => state.game.turn)
  const currentAttack = useAppSelector((state: RootState) => state.playerShips.currentAttack)

  const dispatch = useAppDispatch()


  const renderedSquares = squares.map(i => 
    <div key={i.id} 
    className="square">
      {i.val === null ? null : i.val.length > 1 ? "•" : i.val}
    </div>
    )

  const handleShot = async() => {
    if (turn !== "CPU") {
      return;
    }
      await(dispatch(AsyncMove()))
      // dispatch(setTurn())
  }

  const shipsArr = () => {
    let arr: string[] = []
    for (let i = 0; i < squares.length; i++) {
      if (squares[i].val !== null &&
          squares[i].val.length > 1 &&
          !arr.includes(squares[i].val)
        ) {
          arr.push(squares[i].val)
        }
    } 
    arr.sort()
    return arr.map(i => <p>{i}</p>)
  }  


  return (
    <div className="outer-board" id="player-ships">
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
      />}
      {currentAttack}
      <button onClick={handleShot}>Attack!</button>
    </div>
  )
}