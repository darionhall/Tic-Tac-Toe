$(document).ready(function(){ //first step

  // console.log("loaded"); //


  var $gameCells = $('.cell'); // third step
  var moves = ["","","","","","","","",""];  //fourth step, create array of moves
  var count = 1;
  var turn = 'X';

  $($gameCells).one('click', function(){
      $(this).html(turn);
      moves[this.id] = turn; //fifth checks the array of moves in order

    count++; //sixth step

    turn = (turn == 'X') ? turn = 'O' : turn = 'X';

    console.log(moves, count);
  });




});

// if ()
