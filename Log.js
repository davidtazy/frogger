if ((typeof process !== 'undefined') && (process.release.name === 'node')) {
    var HorizontalMovingSurface = require('./HorizontalMovingSurface')
}
 
class Log extends HorizontalMovingSurface {
 
    constructor(row, col,w, xspeed) {
        super(row, col, w, xspeed, 0)
    }
}
 
 
 
if ((typeof process !== 'undefined') && (process.release.name === 'node')) {
    module.exports = Log
}