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
 return attackArr[attackArr.length - 1] + 1
}