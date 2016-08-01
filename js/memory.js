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
