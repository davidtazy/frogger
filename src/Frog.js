
import Surface from './Surface';


class Frog extends Surface {
  constructor(row, col) {
    super(row, col, 1);
    this.on_log = null;
    this.color = 'green';
  }

  go_left() {
    this.col -= 1;
  }

  go_right() {
    this.col += 1;
  }

  go_up() {
    this.row -= 1;
  }

  go_down() {
    this.row += 1;
  }

  isGameOver(nb_row, nb_col) {
    return this.right() < 0 || this.left() > nb_col - 1
            || this.row < 0 || this.row > nb_row - 1;
  }

  update(nb_col){
    this.xspeed = 0;
    if(this.on_log){
      this.xspeed = this.on_log.xspeed;
    }
    super.update(nb_col);
  }
}
export default Frog;
