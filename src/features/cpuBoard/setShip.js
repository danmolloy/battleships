const randInt = (num) => Math.floor(Math.random() * num)

export const setShip = (length) => {

  if (randInt(2) === 0) { // vertical
    return setVerticalShip(length)
  } else { // horizontal
    return setHorizontallShip(length, regexVal)
  }
}

export const setVerticalShip = (length) => {
  let index = randInt(99 - (length * 10))
  
  return index;
}

export const setHorizontalShip = (length) => {
  let index = randInt(99)
  let regexVal = (9 - length + 1)
  let regex = new RegExp(`[${regexVal}-9]$`)
  
  while (regex.test(String(index))) {
      index = randInt(99)
    }
  
  return index;
}