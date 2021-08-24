# Battleships

A portfolio project, utilizing the following stack:

React
Redux
Tailwind
Jest
TypeScript
GraphQL
Mirage.js
Create React App

## Rules
Each player sets 5 ships on their board. These are:
Carrier (5)
Battleship (4)
Destroyer (4)
Submarine (3)
Patrol Boat (2)

The ships are set on the board. They must not be touching (including corners).
Players take turns attacking. If you hit a ship, you get another turn.

## User stories
[] On load page has a title 'Battleships'
[] There is a status component. On load this is a start button.
[] There are two boards. One is titled 'Player Ships' and the other 'CPU Ships'.
[] The boards are 10 * 10. They are div elements.
[] On load there are ships already rendered in the Player board. 
[] Below each board, one can see how many shots have been fired and what ships are remaining. 

[] Clicking start, the button turns into a pause button. The title turns into a status ie 'CPU turn'
[] Hit accuracy % shown

## CPU turns 
[] If no current targeted attacks, CPU takes random shots.
[] If hit, CPU records the square number.
[] On next turn, CPU tries squares around it. 
[] If a hit, CPU continues in that direction.
[] CPU knows when a ship has been sunk. Targeted attack complete and revert to random.
[] If > 30 shots, CPU makes more targeted shots.
[] CPU ensures enough space for a ship.

## State
Game: 
  inGame: bool
  PlayersTurn: bool

PlayerShips:  
  squares: Array: null | X | O | <ship: string>(<size: number>)
  boardSet: bool
  shots: number
  currentAttack: Array of numbers

CpuShips: 
  squares: null | X | O | <ship: string>(<size: number>)
  boardSet: true/false,
  shots: number

## Board component
CPUShips:
* SetBoard
* HandleClick
* HandleRender 
* Ships Remaining
* Shots Taken
* Shot Accuracy

PlayerShips:
* SetBoard
* RandAttack
* CurrentAttack


* show list of ships remaining
* Turns
* Declare winner/End game


* Jest testing
* Connect to Dummy backend for highscores
* CPU turn logic