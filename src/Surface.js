class Surface {
    constructor(row, col, width, xspeed, yspeed) {
        this.col = col;
        this.row = row;
        this.w = width
        this.xspeed = xspeed || 0
        this.yspeed = yspeed || 0

    }

    avoid(other) {
        return (
            this.row != other.row ||
            this.left() > other.right() ||
            this.right() < other.left()
        )
    }

    collide(other) {
        return !this.avoid(other)
    }

    left() { return this.col }
    right() { return this.col + this.w - 1 }

    update() {
        this.col += this.xspeed
        this.row += this.yspeed
    }
}

module.exports = Surface
