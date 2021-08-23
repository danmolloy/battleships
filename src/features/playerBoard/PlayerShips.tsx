import { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { RootState } from '../../app/store'
import { setPlayerShips, updateSquares, handleAttack } from './playerShipsSlice'
import { setTurn } from '../Game/gameSlice'

export const PlayerShips = () => {
  const squares = useAppSelector((state: RootState) => state.playerShips.PlayerSquares)
  const attackCount = useAppSelector((state: RootState) => state.playerShips.numAttacks)
  const turn = useAppSelector((state: RootState) => state.game.turn)
  const dispatch = useAppDispatch()


  const renderedSquares = squares.map(i => 
    <div key={i.id} 
    className="square">
      {i.val === null ? null : i.val.length > 1 ? "•" : i.val}
    </div>
    )

  const handleShot = () => {
    if (turn !== "CPU") {
      return;
    }
    let randIndex = Math.floor(Math.random() * 100)
    while (squares[randIndex].val === 'O' || squares[randIndex].val === "X") {
      randIndex = Math.floor(Math.random() * 100)
    }
    dispatch(handleAttack(squares[randIndex].id))
    dispatch(setTurn())
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
      <p>Attack count: {attackCount}</p>
      <div>
        Ships Remaining: {shipsArr().length}
        <div>{shipsArr()}
        </div>
      </div>
      <button onClick={handleShot}>Attack!</button>
    </div>
  )
}