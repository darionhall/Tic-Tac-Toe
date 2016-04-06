$(document).ready(function(){ //first step
//1. detect when a button is clicked
//2. collect all the moves
//3. Determine if a list of moves matches a winning combo
//4  Display winner to the user
// detect when a cell is clicked


// setup game


  //prompt here
  //get user name
  //get x or o

  var $gameCells = $('.cell'); // declare variable gameCells
  var moves = ["","","","","","","","",""];  //fourth step, create array of moves
  var count = 0;
  var turn = 'X';

//prompt to get user details
function greeting() {
 var name = prompt("What is your name?");
 alert("Welcome to Tic Tac Toe " + name + "!");
 }
//call the function greeting
 greeting();

 //create a function for reseting or starting a new game.
 $('.reset').on('click', function(){
     $($gameCells).html("");
     var moves = ["","","","","","","","",""];
     var count = 0;
     var turn = 'X';
          startGame();

 })
//call the function for a new game
 startGame();

//add click event to the board cells
function startGame(){
$($gameCells).one('click', function(){
      $(this).html(turn);
      moves[this.id] = turn;
      //this tracks all the moves in an array

    count++; //counts the moves on the gameboard

    //this alternates turns between 'X' and 'O'
    turn = (turn == 'X') ? turn = 'O' : turn = 'X';

    //prints moves on console & alerts participants there's a winner
    console.log(moves, count);
    var winner = isWinner(moves);
    if (winner) {
      alert(winner + ' has won the game!');
    }
  });
}
// checks cells for matches
function checkMatch(cell1, cell2, cell3) {
  return cell1 == cell2 &&
         cell1 == cell3 &&
         cell1 != '';
}

function isWinner(moves){
  //check for a winner

  // check all the rows & columns for a winner
  if (checkMatch(moves[0], moves[1], moves[2])) {
    return moves[0];
  }
  else if (checkMatch(moves[3], moves[4], moves[5])) {
    return moves[3];
  }
  else if (checkMatch(moves[6], moves[7], moves[8])) {
    return moves[6];
  }
  else if (checkMatch(moves[0], moves[3], moves[6])) {
    return moves[0];
  }
  else if (checkMatch(moves[1], moves[4], moves[7])) {
    return moves [1];
  }
  else if (checkMatch(moves[2], moves[5], moves[8])) {
    return moves [2];
  }

  // checks last 2 columns and diagonals for a winner
  else if (checkMatch(moves[0], moves[4], moves[8])){
    return moves [0];
  }
  else if (checkMatch(moves[2], moves[4], moves[6])){
    return moves [2];
  }

  //returns null if no winning combination is present
  else {
    return null;
  }


};


});

