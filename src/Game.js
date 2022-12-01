const data = require("./data");
const prototypeQuestions = data.prototypeData;
const util = require("./util");
const Card = require("./Card");
const Deck = require("./Deck");
const Round = require("./Round");

class Game {
  constructor() {
    this.currentRound = 0;
    this.cards = null;
    this.deck = null;
    this.round = null;
  }

  start() {
    this.makeCards();
    this.fillDeck();
    this.createRound();
    this.printMessage(this.deck, this.round);
    this.printQuestion(this.round);
  }

  makeCards() {
    this.cards = prototypeQuestions.map((card) => {
      card = new Card(card.id, card.question, card.answers, card.correctAnswer);
      return card;
    });
  }

  fillDeck() {
    this.deck = new Deck(this.cards);
  }

  createRound() {
    this.round = new Round(this.deck);
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;
