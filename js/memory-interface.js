var Game = require('./../js/memory.js').memoryModule;
var game;


$(document).ready(function() {
  $('#cardSet').hide();
  $('.back').hide();
  var secondClick = false;
  var matchOne;
  var matchTwo;
  var match;

  $('#start').click(function() {
    game = new Game();
    $('#cardSet').show();
  });

  $('.card').click(function() {
    if (!secondClick) {
      console.log('first block');
      $(this).find('img').addClass('unclickable');
      $(this).addClass('unclickable');
      $(this).find('img').fadeIn();
      $(this).find('img').addClass('viewing');
      matchOne = $(this).attr('data-match');
      secondClick = true;
    } else if (secondClick) {
      console.log('second block');
      $(this).addClass('viewing');
      $(this).find('img').fadeIn();
      $(this).find('img').addClass('viewing');
      matchTwo = $(this).attr('data-match');
      match = game.takeTurn(matchOne, matchTwo);
      secondClick = false;
        if(!match){
          $('img').removeClass('viewing');
        }else{
          $('.unclickable').addClass('matched');
          $(this).find('img').addClass('matched');
        }
      $('img').not(".matched").fadeOut();
      $('*').removeClass('unclickable');
    }
    if (game.win) {
      $("body").append("<h1>you winz</h1>");
    }
  });
});
