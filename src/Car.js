
const HorizontalMovingSurface = require('./HorizontalMovingSurface');


class Car extends HorizontalMovingSurface {
  constructor(row, col, xspeed) {
    super(row, col, 1, xspeed, 0);
  }

  interact(frog) {
    if (this.collide(frog)) {
      frog.col = -frog.col;
      return true;
    }
    return false;
  }
}

module.exports = Car;
