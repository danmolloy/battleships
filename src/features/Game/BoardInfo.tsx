export const BoardInfo = (props: any) => {
  
  const shipsArr = (squares: any) => {
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
    <div>
      <p>Attack count: {props.attackCount}</p>
      <div>
        <div onClick={() => props.showShips()}>
          <div>
            <p>Ships Remaining: {shipsArr(props.squares).length}</p>
            {props.showList ?
            <i className="up-arrow"></i>  : 
            <i className="down-arrow"></i>}
          </div>
          {props.showList &&
          shipsArr(props.squares)}
        </div>
      </div>
    </div>
  )
}