import { useAppSelector, useAppDispatch } from '../../app/hooks'

export const CPUShips = () => {
  const squares = useAppSelector(state => state.cpuShips.CPUSquares)

  const renderedSquares = squares.map(i => 
    <div 
    key={i} 
    className="square hover:bg-blue-500" 
    onClick={() => alert('hello')}
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
    </div>
  )
}