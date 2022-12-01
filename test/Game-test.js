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

  it("should be a function", () => expect(Game).to.be.a("function"));

  it("should be an instance of Game", () =>
    expect(game).to.be.an.instanceof(Game));

  it("should keep track of the current round", () =>
    expect(game).to.have.property("currentRound").to.deep.equal(0));

  it("should be able to hold cards", () =>
    expect(game).to.have.property("cards"));

  it("should be able to have a deck", () =>
    expect(game).to.have.property("deck"));

  it("should be able to have a round", () =>
    expect(game).to.have.property("round"));

  it("should create cards on game start", () => {
    game.makeCards();
    expect(game.cards).to.have.lengthOf(30);
  });

  it("should fill the deck with cards", () => {
    game.makeCards();
    game.fillDeck();
    expect(game.deck).to.be.an.instanceOf(Deck);
  });

  it("should create a new round using the deck", () => {
    game.makeCards();
    game.fillDeck();
    game.createRound();
    expect(game.round).to.be.an.instanceOf(Round);
  });
});
