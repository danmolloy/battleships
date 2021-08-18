const randInt = (num) => Math.floor(Math.random() * num)

export const setShip = (length, currentState) => {
  let squares = currentState.slice()

  if (randInt(2) === 1) { 
    return setVerticalShip(length, squares)
  } else { 
    return setHorizontalShip(length, squares)
  }
}

const verticalCheck = (minSquare, maxSquare, squares) => {
  for (let i = minSquare; i <= maxSquare; i += 10) {
    if (squares[i].val === "•") {
      return false;
    }
  } 
  return true
}

const setVerticalShip = (length, squaresSlice) => {
  let index = randInt(100 - (length * 10))
  let loopCount = 0;

  while (loopCount < 20) {  
    if (index === 0) {
      if (verticalCheck(0, index + (length * 10), squaresSlice) &&
        verticalCheck(1, index + (length * 10 + 1), squaresSlice)) {
          break
        } else {
          index = randInt(100 - (length * 10))
          loopCount =+ 1
        }

    } else if (index === 9) {
      if (verticalCheck(9, index + (length * 10), squaresSlice) &&
      verticalCheck(8, index + (length * 10 - 1), squaresSlice)) {
        break
      } else {
        index = randInt(100 - (length * 10))
        loopCount =+ 1
      }

    } else if ((index + (length * 10) - 10) === 99) {
      if (verticalCheck(index - 10, 99, squaresSlice) &&
      verticalCheck(index - 11, 98, squaresSlice)) {
        break;
      } else {
        index = randInt(100 - (length * 10))
        loopCount =+ 1
      }

    } else if ((index + (length * 10) - 10) === 90) {
      if (verticalCheck(index - 10, 90, squaresSlice) &&
      verticalCheck(index - 9, 91, squaresSlice)) {
        break;
      } else {
        index = randInt(100 - (length * 10))
        loopCount =+ 1
      }

    } else if ((index + (length * 10)) > 89) {
      if (verticalCheck(index - 10, index + (length * 10 - 10), squaresSlice) &&
      verticalCheck(index - 11, index + (length * 10 - 11), squaresSlice) &&
      verticalCheck(index - 9, index +(length * 10 - 9), squaresSlice)) {
        break;
      } else {
        index = randInt(100 - (length * 10))
        loopCount =+ 1
      }

    } else if ((index - 10) < 0) {
      if (verticalCheck(index, index + (length * 10), squaresSlice) &&
        verticalCheck(index - 1, index + (length * 10 - 1), squaresSlice) &&
        verticalCheck(index + 1, index + (length * 10 + 1), squaresSlice)) {
        break;
      } else {
        index = randInt(100 - (length * 10))
        loopCount =+ 1
      }

    } else if ((index % 10) === 9) {
      if (verticalCheck(index - 10, index + (length * 10), squaresSlice) &&
      verticalCheck(index - 11, index + (length * 10) - 1, squaresSlice)) {
        break;
      } else {
        index = randInt(100 - (length * 10))
        loopCount =+ 1
      }
    } else if ((index % 10) === 0) {
      if (verticalCheck(index - 10, index + (length * 10), squaresSlice) &&
      verticalCheck(index - 9, index + (length * 10) + 1, squaresSlice)) {
        break;
      } else {
        index = randInt(100 - (length * 10))
        loopCount =+ 1
      }
    } else {
      if (verticalCheck((index - 10), (index + (length * 10)), squaresSlice) &&
        verticalCheck(index - 11, index + (length * 10) - 1, squaresSlice) &&
        verticalCheck(index - 9, index + 1 + (length * 10), squaresSlice)) {
        break;
      } else {
        index = randInt(100 - (length * 10))
        loopCount =+ 1
      }
    }
  }  
  if (loopCount >= 10) {
    return;
  } 

  let arr = []
  for (let i = index; i < index + (length * 10); i += 10) {
    arr.push(i)
  }
  return arr
}

const horizontalCheck = (minSquare, maxSquare, squares) => {
  
  for (let i = minSquare; i <= maxSquare; i ++) {
    if (squares[i].val === "•") {
      return false;
    }
  } 
  return true
}

const horizonatalIndex = (length) => {
  return Number(String(randInt(10)) + String(randInt(10 - length)))
}

const setHorizontalShip = (length, squaresSlice) => {
  let index = horizonatalIndex(length)
  let loopCount = 0

  while (loopCount < 10) {
      if (index === 0) {
        if (horizontalCheck(index, index + length, squaresSlice) && 
          horizontalCheck(index + 10, index + length + 10, squaresSlice)) {
          break
        } else {
          index = horizonatalIndex(length)
        }
    } else if (index + length - 1 === 9) {
      if (horizontalCheck(index - 1, index + length - 1, squaresSlice) && 
        horizontalCheck(index + 9, index + length + 9, squaresSlice)) {
          break
        } else {
          index = horizonatalIndex(length)
        }
    } else if (index + length - 1 === 99) {
      if (horizontalCheck(index - 1, index + length - 1, squaresSlice) && 
        horizontalCheck(index - 11, index + length - 11, squaresSlice)) {
          break
        } else {
          index = horizonatalIndex(length)
        }
    } else if (index === 90) {
      if (horizontalCheck(index, index + length, squaresSlice) && 
        horizontalCheck(index - 10, index + length - 10, squaresSlice)) {
          break
        } else {
          index = horizonatalIndex(length)
        }
    } else if (index < 9) {
      if (horizontalCheck(index - 1, index + length, squaresSlice) &&
        horizontalCheck(index + 9, index + length + 10, squaresSlice)) {
          break
        } else {
          index = horizonatalIndex(length)
        }
    } else if (index % 10 === 0) {
      if (horizontalCheck(index, index + length, squaresSlice) && 
        horizontalCheck(index - 10, index + length - 10, squaresSlice) &&
        horizontalCheck(index + 10, index + length + 10, squaresSlice)) {
          break
        } else {
          index = horizonatalIndex(length)
        }
    } else if ((index + length - 1) % 10 === 9) {
      if (horizontalCheck(index - 1, index + length - 1, squaresSlice) && 
        horizontalCheck(index - 11, index + length - 11, squaresSlice) &&
        horizontalCheck(index + 9, index + length + 9, squaresSlice)) {
          break
        } else {
          index = horizonatalIndex(length)
        }
    } else if (index > 90) {
      if (horizontalCheck(index - 1, index + length, squaresSlice) && 
        horizontalCheck(index - 11, index + length - 10, squaresSlice)) {
          break
        } else {
          index = horizonatalIndex(length)
        }
    } else {
      if (horizontalCheck(index - 1, index + length, squaresSlice) && 
        horizontalCheck(index - 11, index + length - 10, squaresSlice) &&
        horizontalCheck(index + 9, index + length + 10, squaresSlice)) {
          break
        } else {
          index = horizonatalIndex(length)
        }
    }
    loopCount ++ 
  }

  let arr = []
  for (let i = index; i < index + length; i++) {
    arr.push(i)
  }

  return arr 
}