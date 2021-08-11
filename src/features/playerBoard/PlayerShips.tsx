import { useAppSelector, useAppDispatch } from '../../app/hooks'

export const PlayerShips = () => {
  const squares = useAppSelector(state => state.playerShips.PlayerSquares)

  const renderedSquares = squares.map(i => 
    <div key={i} className="square">
      {i}
    </div>
    )

  return (
    <div className="outer-board" id="player-ships">
      <h3>Player Ships</h3>
      <div className="inner-board">
        {renderedSquares}
      </div>
    </div>
  )
}