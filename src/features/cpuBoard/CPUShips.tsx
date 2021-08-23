import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { setTurn } from '../Game/gameSlice'
import { handleAttack } from './cpuShipsSlice'


export const CPUShips = () => {
  const squares = useAppSelector(state => state.cpuShips.CPUSquares)
  const attackCount = useAppSelector(state => state.cpuShips.numAttacks)
  const turn = useAppSelector(state => state.game.turn)

  const dispatch = useAppDispatch()

  const handleClick = (squareID: string) => {
    let shotSquare = squares.find(i => i.id === squareID)
    if (turn !== "Player" || 
      shotSquare?.val === 'O' ||
      shotSquare?.val === 'X') {
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
      {i.val === null ? null : i.val.length > 1 ? "•" : i.val}
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
      <p>Attack count: {attackCount}</p>
      <div>
        Ships Remaining: {shipsArr().length}
        <div>{shipsArr()}
        </div>
      </div>
    </div>
  )
}

function i(i: any, arg1: (index: any) => JSX.Element) {
  throw new Error('Function not implemented.')
}
