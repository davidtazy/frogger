const HorizontalMovingSurface = require('./HorizontalMovingSurface')



class Water extends HorizontalMovingSurface {

    constructor(row, col, w, xspeed) {
        super(row, col, w, xspeed, 0)
    }


    interact(frog) {
        //frog fully in water
        if (this.collide(frog) && this.left() <= frog.left() && this.right() >= frog.right()) {
            frog.col = -1
            return true;
        }
        return false;
    }

    attachable() { }
}



module.exports = Water
