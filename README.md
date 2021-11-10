# Battleships

## Rules
Upon clicking Start, the boards are both rendered with following ships (the bracketed number is the number of squares long it is):

1 x Carrier (5)
1 x Battleship (4)
1 x Destroyer (3)
1 x Submarine (3)
1 x Patrol Boat (2)

The ships may be horizontal or vertical. They cannot be touching another ship (including a diagonal square).

Player can see their ships which the CPU is attacking (represented with '•' on the 'Player Ships' board). However, like the classic rules, the player cannot see the ships they are attacking (on the 'CPU Ships' board). 

'X' represents a hit, whereas 'O' is a miss. 

## CPU turns
The CPU is unaware of where the player's ships are set. It will take random shots until it hits a ship. At this point, it will log where that square is. Just like a human player, it will try the squares in various directions until it learns the direction the ship is sitting. Once again, just like a human player, the CPU is notified when the ship under attack sinks and reverts to random attacks. 

There is a small interval before CPU makes a turn to make it seem more authentic.

## Features
Like many games, a player can view the highscores of past players.

There is a small amount of useful information for the player to peruse while playing, i.e. the ships remaining and number of attacks taken.

## Stack:
- React
- Redux
- Tailwind
- Jest
- TypeScript
- Mirage.js
- Create React App

In planning this game, it quickly became apparent that it would be easiest to handle state with redux. I divided the state into three categories:
* Game: handles who's turn it is, whether game is in play and highscores
* CPU board: handles setting CPU ship's, handling player's moves and their progress in game (number of moves made, ships remaining).
* Player board: handles setting Player ships, CPU attack logic and the CPU progress in game.

I initially had considered minimizing code by combining CPU and Player board slices, but decided the more verbose approach brings clarity. 

The highscores a fetched from a mock backend created with Miragejs. I felt it a nice touch to what would otherwise be a purely frontend project.

The project is my first with TypeScript. As one will see, I'm still getting familiar with it. I'm following the handbook's suggestion of initially seeing how little I need, although I may have taken this advice too far!

I used tailwind for the styling, which I chose to keep as minimal as possible.


