import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { addAttack, setAllShips } from './cpuShipsSlice'

export const CPUShips = () => {
  const squares = useAppSelector(state => state.cpuShips.CPUSquares)
  const attackCount = useAppSelector(state => state.cpuShips.numAttacks)

  const dispatch = useAppDispatch()

  const setBoard = () => {
    dispatch(setAllShips())
  }

  const renderedSquares = squares.map(i => 
    <div 
    key={i.id} 
    className="square hover:bg-blue-500" 
    onClick={() => dispatch(addAttack())}
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
      <button onClick={setBoard}>Set</button>
    </div>
  )
}