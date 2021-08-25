import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { setTurn } from '../Game/gameSlice'
import { handleAttack } from './cpuShipsSlice'
import { useEffect, useState } from 'react'
import { BoardInfo } from '../Game/BoardInfo'

export const CPUShips = () => {
  const [showShipsRemaining, setShowShipsRemaining] = useState(false)
  const squares = useAppSelector(state => state.cpuShips.CPUSquares)
  const attackCount = useAppSelector(state => state.cpuShips.numAttacks)
  const turn = useAppSelector(state => state.game.turn)
  const inGame = useAppSelector(state => state.game.inGame)

  const dispatch = useAppDispatch()


  useEffect(() => {
    if (inGame === 'playing' && 
      shipsArr().length === 0) {
      alert("Player wins")
    }
  }, [])

  const handleClick = (squareID: string) => {
    let shotSquare = squares.find(i => i.id === squareID)
    if (turn !== "Player" || 
      shotSquare?.val === 'O' ||
      shotSquare?.val === 'X' ||
      inGame !== 'playing') {
      return;
    } else {
      dispatch(handleAttack(squareID))
      dispatch(setTurn())
    }
  }

  const renderedSquares = squares.map(i => 
    <div 
    key={i.id} 
    className="square hover:bg-blue-500" 
    onClick={() => handleClick(i.id)}
    >
      {i.val === null ? null : i.val.length > 1 ? null : i.val}
    </div>
    )
  
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
    <div className="outer-board" id="cpu-ships">
      <h3>CPU Ships</h3>
      <div className="inner-board">
        {renderedSquares}
      </div>
      {turn !== null && 
      <BoardInfo 
        attackCount={attackCount} 
        showShipsRemaining={showShipsRemaining}
        squares={squares.slice()}
        showList={showShipsRemaining}
        showShips={() => setShowShipsRemaining(!showShipsRemaining)}
        whoAmI="Player"
      />}
    </div>
  )
}

function i(i: any, arg1: (index: any) => JSX.Element) {
  throw new Error('Function not implemented.')
}
