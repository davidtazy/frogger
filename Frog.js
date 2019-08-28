if ((typeof process !== 'undefined') && (process.release.name === 'node')) {
    var Surface = require('./Surface')
}

class Frog extends Surface {
    constructor(row, col) {
        super(row, col, 1)
    }

    go_left() {
        this.col -= 1
    }

    go_right(){
        this.col +=1
    }

    go_up(){
        this.row -=1
    }

    go_down(){
        this.row +=1
    }
}

if ((typeof process !== 'undefined') && (process.release.name === 'node')) {
    module.exports = Frog
}