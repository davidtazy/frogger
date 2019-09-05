//const Surface = require('./Surface');
import Surface from './Surface';

class HorizontalMovingSurface extends Surface {
  constructor(row, col, w, xspeed) {
    super(row, col, w, xspeed, 0);
  }


  update(nb_col) {
    
    if( ! Number.isInteger(nb_col)){
        throw new Error('HorizontalMovingSurface.update no parameter nb_col');
    }

    super.update();

    // overlap right to left
    if (this.xspeed > 0 && this.left() > nb_col) {
      this.col = -this.w;
    }

    // overlap left to right
    if (this.xspeed < 0 && this.right() < 0) {
      this.col = nb_col;
    }
  }

}


export default HorizontalMovingSurface;
