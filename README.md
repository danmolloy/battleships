# Battleships

## Stack:
- React
- Redux
- Tailwind
- Jest
- TypeScript
- GraphQL
- Mirage.js
- Create React App

## Rules

Ships:
1 x Carrier (5)
1 x Battleship (4)
1 x Destroyer (3)
1 x Submarine (3)
1 x Patrol Boat (2)

Player and CPU take turns attacking. If you hit a ship, you get another turn.

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

* Jest testing
* ReadMe
* Take another shot if 'X'
* Hide CPU ships

## CPU turn logic
[] CPU takes turn automatically
[] States if CPU is thinking
[] CPU makes note if square is a hit
[] CPU tries directions
[] If ship sinks CPU tries new rand attack

## High Scores
[] On pressing start user enters username
[] If winner, user's info submitted to backend
[] Highscore table shown
