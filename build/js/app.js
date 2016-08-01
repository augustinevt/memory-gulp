(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Game() {
  this.turnCount = 0;
  this.matchCount = 0;
  this.possibleMatches = 5;
  this.win = false;
}

Game.prototype.Win = function() {
  this.win = true;
}

Game.prototype.takeTurn = function(firstCard, secondCard) {
  var match;

  if (firstCard === secondCard ) {
    this.matchCount ++;
    match = true;
  } else if (firstCard !== secondCard ) {
    match = false;
  }

  this.turnCount ++;

  if (this.matchCount == this.possibleMatches) {
    this.Win();
  }
  return match;
}



exports.memoryModule = Game;

},{}],2:[function(require,module,exports){
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

},{"./../js/memory.js":1}]},{},[2]);
