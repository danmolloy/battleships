import reducer, { updateSquares } from './playerShipsSlice'

test('should return initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    PlayerSquares: new Array(100).fill(null),
    boardSet: false,
    numAttacks: 0,
    currentAttack: null
  })
})

test('state updates', () => {
  const previousState = {
    PlayerSquares: new Array(100).fill(null),
    boardSet: false,
    numAttacks: 0,
    currentAttack: null
  }
  expect(reducer(previousState, updateSquares([1, 2, 3])).not.toEqual(previousState))
})