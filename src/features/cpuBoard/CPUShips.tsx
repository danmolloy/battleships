import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { setTurn } from '../Game/gameSlice'
import { addAttack, setCPUShips } from './cpuShipsSlice'


export const CPUShips = () => {
  const squares = useAppSelector(state => state.cpuShips.CPUSquares)
  const attackCount = useAppSelector(state => state.cpuShips.numAttacks)
  const turn = useAppSelector(state => state.game.turn)

  const dispatch = useAppDispatch()

  const handleClick = () => {
    if (turn !== "Player") {
      return;
    } else {
      dispatch(addAttack())
      dispatch(setTurn())
    }
  }

  const renderedSquares = squares.map(i => 
    <div 
    key={i.id} 
    className="square hover:bg-blue-500" 
    onClick={handleClick}
    >
      {i.val}
    </div>
    )

  return (
    <div className="outer-board" id="cpu-ships">
      <h3>CPU Ships</h3>
      <div className="inner-board">
        {renderedSquares}
      </div>
      <p>Attack count: {attackCount}</p>
    </div>
  )
}