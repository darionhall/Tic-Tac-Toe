                        Tic Tac Toe

LINKS:


[Trello Board for Tic Tac Toe Project](https://trello.com/b/gu5jngTs/tic-tac-toe)

[Original Wireframe](https://gomockingbird.com/projects/q7r0d4r/4gXVnC)

[Tic Tac Toe Game] (http://darionhall.github.io/Tic-Tac-Toe/)

Introduction

 * Objective Design
 * Wireframe
 * Installation / Configuration

OBJECTIVE/USER STORIES:

* This game will allow the user to play a game of Tic Tac Toe on his/her
computer.
* The user can play as many games as they please without having to
refresh the page.
*Players will be able to click on a square and place a "X" or "O" as their
game piece.
* If a player forms a row, column or diagonal with
their pieces, they win the game. Essentially getting three of their pieces
in order horizontally, vertically, or diagonally.
* Each player should try to win in the lowest possible number of moves.
* However, if the grid is full with no more cell/blocks to fill, the game ends
in a draw. Players can choose to start a new game from scratch.


DESIGN / WIREFRAME:


HTML - create a game board using sections and rows in the body element.

CSS - find a background from google that makes the game theme more apparent.
Use CSS to form the game board. Lastly, use CSS to position the title, game
board and reset button.


INSTALLATION / CONFIGURATION:


HTML - Create a game board by using sections with three rows, each row contain
three cells. Forming a 3 x 3 grid for tic tac toe. Create a button class
called "reset" for restarting an existent game or starting a new game. Lastly,
link my stylesheet, javascript and jquery to the index.html in the head.

CSS - use box border to section off each piece/cell of the game board. Use
float: left attribute to help cells align for a traditional tic tac toe board.
Find a background on google images that represents one of my many interest,
music.

JavaScript/jQuery - Starting off with a greeting function that prompts a
window asking for the player(s) name and saying welcome to Tic Tac Toe. From
there I use different functions to: detect when a button is clicked, when a
cell is clicked to collect all the moves, determine if a list of moves matches
a winning combo, and display the winner to the user.
