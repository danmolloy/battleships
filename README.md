Check out the [live example](https://mystifying-saha-d28822.netlify.app/).

## Features
### Logical CPU tactics
As with human players, CPU is unaware of where the player's ships are set. It will take random shots until it hits a ship. At this point, it will log where that square is, then attack the squares in various directions until it learns the direction the ship is sitting. Once again, just like a human player, the CPU is notified when the ship under attack sinks and reverts to random attacks.

### View and submit highscores
There is a mock backend created using MirageJS. You can view highscores at any time. At the end of the game you can submit your score.

### Instructions
Concise game instructions for those who are new to the game.

### In game information 
Helpful data on ships remaining and attack count.

## Stack:
- React
- Redux
- TypeScript
- Tailwind
- Jest & React Testing Library
- MirageJS
