
import HorizontalMovingSurface from './HorizontalMovingSurface';


class Car extends HorizontalMovingSurface {
  constructor(row, col, xspeed) {
    super(row, col, 1, xspeed, 0);
    this.color = 'red';
  }

  //game over is frog collid frog
  interact(frog) {
    if (this.collide(frog)) {
      frog.col = -10;
      return true;
    }
    return false;
  }
}

export default Car;
