import HorizontalMovingSurface from './HorizontalMovingSurface';


class Log extends HorizontalMovingSurface {
  constructor(row, col, w, xspeed) {
    super(row, col, w, xspeed, 0);
    this.color = 'brown';
  }


  interact(frog) {
 
    if (this.collide(frog)) {
      frog.on_log = this;
      return true;
    }else if (frog.on_log == this){
      frog.on_log = null;
      return false;
    }
    return false;
  }

  attachable() { }
}


export default Log;
