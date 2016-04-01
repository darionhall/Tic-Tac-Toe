$(document).ready(function(){

  // console.log("loaded"); //

  var $gameCells = $('.cell');

  $('.cell').one('click', function(){
//one for the click to only take once or run this $('.cell').on('click', function(){
  //  console.log("Board Clicked!");

    console.log(this.id);
  })




});
