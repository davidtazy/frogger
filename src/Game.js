
const Car = require('./Car');
const Log = require('./Log');
const Frog = require('./Frog');
const Water = require('./Water');

class Game {
  constructor(nb_row, nb_col, level) {
    this.level = level;
    this.nb_col = nb_col;
    this.nb_row = 5;


    this.start_col = Math.floor(nb_col / 2);

    this.frog = new Frog(this.stage(1), this.start_col);

    this.elements = [];

    // create
    this.elements.push(new Car(this.stage(2), 0, 0.1));
    this.elements.push(new Log(this.stage(4), 0, 3, -0.1));
    this.elements.push(new Log(this.stage(5), 0, 3, 0.1));
  }

  stage(st) {
    return this.nb_row - st;
  }
}
module.exports = Game;
