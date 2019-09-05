class Surface {
    constructor(row, col, width, xspeed, yspeed) {
        this.col = col;
        this.row = row;
        this.w = width;
        this.xspeed = xspeed || 0;
        this.yspeed = yspeed || 0;
        this.color= 255;

    }

    avoid(other) {
        return (
            this.row != other.row ||
            this.left() > other.right() ||
            this.right() < other.left()
        );
    }

    collide(other) {
        return !this.avoid(other);
    }

    left() { return this.col; }
    right() { return this.col + this.w - 0.1; }

    update() {
        this.col += this.xspeed;
        this.row += this.yspeed;
    }
}

export default  Surface;
