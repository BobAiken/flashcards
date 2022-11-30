const chai = require("chai");
const expect = chai.expect;
const Game = require("../src/Game");
const Card = require("../src/Card");
const Deck = require("../src/Deck");
const Round = require("../src/Round");

describe("Game", () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  it("should keep track of the current round", () =>
    expect(game).to.have.property("currentRound").to.deep.equal(0));

  it("should create cards on game start", () => {
    game.makeCards();
    expect(game.cards).to.have.lengthOf(30);
    console.log(game.cards);
  });

  it("should fill the deck with cards", () => {
    game.makeCards();
    game.fillDeck();
    expect(game.deck).to.be.an.instanceOf(Deck);
    console.log(game.deck);
  });

  it("should create a new round using the deck", () => {
    game.makeCards();
    game.fillDeck();
    game.createRound();
    expect(game.round).to.be.an.instanceOf(Round);
  });
});
