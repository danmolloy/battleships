
const randInt = (board: Array<{val: any, id: any}>) => {
  let randIndex = Math.floor(Math.random() * 100)
  while (board[randIndex].val === 'O' || board[randIndex].val === "X") {
    randIndex = Math.floor(Math.random() * 100)
  }
  return randIndex  
//dispatch(setTurn())
}

export const fetchTurn = (squares: Array<{val: any, id: any}>) => {
  return new Promise<{data: number}>((resolve) => 
    setTimeout(() => resolve({ data: randInt(squares)}), 500)
  )
}