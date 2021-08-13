import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { addAttack } from './cpuShipsSlice'

export const CPUShips = () => {
  const squares = useAppSelector(state => state.cpuShips.CPUSquares)
  const attackCount = useAppSelector(state => state.cpuShips.numAttacks)

  const dispatch = useAppDispatch()

  const renderedSquares = squares.map(i => 
    <div 
    key={i} 
    className="square hover:bg-blue-500" 
    onClick={() => dispatch(addAttack())}
    >
      {i}
    </div>
    )

  return (
    <div className="outer-board" id="cpu-ships">
      <h3>CPU Ships</h3>
      <div className="inner-board">
        {renderedSquares}
      </div>
      Attack count: {attackCount}
    </div>
  )
}