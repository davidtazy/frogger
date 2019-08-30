//const Game = require('./Game')


let game;

function setup() {
  createCanvas(640, 480);

  game = new Game(6, 6, 1);
}

function draw() {
    console.log("draw")
  background(51);
}
