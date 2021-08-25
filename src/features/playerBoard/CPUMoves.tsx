export const fetchMove = (board: Array<{val: any, id: any}>, attackArr: number[]) => {
  if (attackArr.length > 0) {
    return new Promise<{ data: number }>((resolve) => 
    setTimeout(() => resolve({ data: targetedAttack(board, attackArr)}), 500)
  );
  } else {
    return new Promise<{ data: number }>((resolve) => 
    setTimeout(() => resolve({ data: randAttack(board)}), 500)
  );
  }
}

const randAttack = (board: Array<{val: any, id: any}>) => {
  let square = Math.floor(Math.random() * 100);
  while (board[square].val === 'O' || 
    board[square].val === 'X') {
    square = Math.floor(Math.random() * 100);
  }
  return square
}

const targetedAttack = (board: Array<{val: any, id: any}>, attackArr: Array<number>) => {
  let loopCount = 0;
  if (attackArr.length === 1) {
    let square = attackArr[0]
    let nextAttack = Math.floor(Math.random() * 4)
    while (loopCount < 10) {
      if (nextAttack === 0) { // North
        if (board[square - 10].val !== 'O' && 
          board[square - 10].val !== 'X' && 
          square - 10 >= 0) {
          return square - 10
        } 
      } else if (nextAttack === 1) { // East
        if (board[square + 1].val !== 'O' && 
        board[square + 1].val !== 'X' &&
        square % 10 !== 0) {
          return square + 1
        } 
      } else if (nextAttack === 2) { // South
        if (board[square + 10].val !== 'O' && 
        board[square + 10].val !== 'X' &&
        square <= 99) {
          return square + 10
        } 
      } else if (nextAttack === 3) { // West
        if (board[square - 1].val !== 'O' && 
        board[square - 1].val !== 'X' &&
        square % 10 != 9) {
          return square - 1
        } 
      }
      nextAttack = Math.floor(Math.random() * 4)
      loopCount++
    }
  } else {
    while (loopCount < 10)
    if (attackArr[1] - attackArr[0] === 10) { 
      let nextAttack = attackArr[attackArr.length - 1] + 10 // South
      if (board[nextAttack].val !== 'O' && 
      board[nextAttack].val !== 'X' &&
      nextAttack <= 99) {
        return nextAttack
      } else { // North
        return attackArr[0] - 10;
      } 
    } else {
      let nextAttack = attackArr[attackArr.length - 1] + 1
      if (board[nextAttack].val !== 'O' && 
      board[nextAttack].val !== 'X' &&
      nextAttack % 10 != 10) {
        return nextAttack
      } else {
        return attackArr[0] - 1;
      } 
    }
  }
  return 1;
}