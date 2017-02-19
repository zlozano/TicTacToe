# Tic Tac Toe

AI agent to play Tic Tac Toe

The purposed of this program was to better understand adversarial search, and to get a chance to play with ReactJS and webpack.

# Implementation

The implementation used is a [minimax](https://en.wikipedia.org/wiki/Minimax) algorithm with [alpha-beta pruning](https://en.wikipedia.org/wiki/Alpha%E2%80%93beta_pruning).

Since the upper bound for the game tree is only 362,880 (9!), it is very easy to search the entire game tree for the next possible move.  I accomplish this with the alpha-beta optimization.

# Running the application

The system I am running/developing is OSX 10.11, NodeJS v6.6.0, and npm 3.10.3.

To run, download/clone the repository, and in the root directory run:

`npm install`

and

`npm run start`

The script should open index.html in your default browser.
