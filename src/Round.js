const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.currentTurn;
  }
  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }
  takeTurn(guess) {
    this.currentTurn = new Turn(guess, this.deck.cards[this.turns]);
    if (!this.currentTurn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentTurn.card.id);
    }
    this.turns++;
    return this.currentTurn.giveFeedback();
  }
  calculatePercentCorrect() {
    return Number(
      (
        ((this.turns - this.incorrectGuesses.length) / this.turns) *
        100
      ).toFixed(2)
    );
  }
  endRound() {
    console.log(
      `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    );
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
  }
}

module.exports = Round;
