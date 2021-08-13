const randInt = (num) => Math.floor(Math.random() * num)

export const setShip = (length, currentState) => {
  let squares = currentState.slice()

  
  if (randInt(2) === 0) { 
    return setVerticalShip(length, squares)
  } else { 
    return setHorizontalShip(length, squares)
  }
}

export const setVerticalShip = (length, squaresSlice) => {
  let index = randInt(99 - (length * 10))
  let i = index - 10
  
  while (i <= index + (length * 10)) {
    if (squaresSlice[i] !== null ||
        squaresSlice[i - 1] !== null ||
        squaresSlice[i + 1] !== null
      ) {
        index = randInt(99 - (length * 10))
        i = index - 10
      } else {
        i += 10;
      }
  }
  let arr = []
  for (let i = index; i < index + (length * 10); i += 10) {
    arr.push(i)
  }

  return arr
}


export const setHorizontalShip = (length, squaresSlice) => {
  let index = randInt(99)
  let regexVal = (9 - length + 1)
  let regex = new RegExp(`[${regexVal}-9]$`)
  let i = index - 1;

  while (i <= index + (length)) {
    if (squaresSlice[i] !== null || 
        squaresSlice[i - 10] !== null ||
        squaresSlice[i + 10] !== null ||
        regex.test(String(index))
      ) {
        index = randInt(99);
        i = index - 1
      } else {
        i += 1;
      }
  }
  
  let arr = []
  for (let i = index; i < index + length; i++) {
    arr.push(i)
  }

  return arr
  
}