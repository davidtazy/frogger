const HorizontalMovingSurface = require('./HorizontalMovingSurface');


class Log extends HorizontalMovingSurface {
  constructor(row, col, w, xspeed) {
    super(row, col, w, xspeed, 0);
  }


  interact(frog) {
    if (this.collide(frog)) {
      frog.xspeed = this.xspeed;
      return true;
    }
    return false;
  }

  attachable() { }
}


module.exports = Log;
