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

  var $gameCells = $('.cell'); // third step
  var moves = ["","","","","","","","",""];  //fourth step, create array of moves
  var count = 0;
  var turn = 'X';
  // var score = {
  //   'X': 0,
  //   'O': 0
  // };
  // var win = [ "0,1,2", "0,3,6", "0,4,8", "1,4,7", "2,4,6", "2,5,8", "3,4,5", "6,7,8"]




// function greeting() {
//  var name = prompt("What is your name?");
//  alert("Welcome to Tic Tac Toe " + name + "!");
//  }

// greeting();
//prompt to get user details


//add click event to the board cells
$($gameCells).one('click', function(){
      $(this).html(turn);
      moves[this.id] = turn;
      //this tracks all the moves in an array

    count++; //sixth step

    turn = (turn == 'X') ? turn = 'O' : turn = 'X';

    console.log(moves, count);
    var winner = isWinner(moves);
    if (winner) {
      alert(winner + ' has won the game!');
    }
  });

function checkMatch(cell1, cell2, cell3) {
  return cell1 == cell2 &&
         cell1 == cell3 &&
         cell1 != '';
}

function isWinner(moves){
  //check for a winner

  // check all the rows for a match
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

  // TODO: last 2 columns and diagonals
  else if (checkMatch(moves[0], moves[4], moves[8])){
    return moves [0];
  }
  else if (checkMatch(moves[2], moves[4], moves[6])){
    return moves [2];
  }


  else {
    return null;
  }


}

});

