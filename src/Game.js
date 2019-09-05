
import Car from './Car';
import Log from './Log';
import Frog from './Frog';
import Water from './Water';
import Surface from './Surface';

export default class Game {
  constructor(nb_row, nb_col, level) {
    this.level = level;
    this.nb_col = nb_col;
    this.nb_row = nb_row;
    this.start_col = Math.floor(nb_col / 2);
    this.frog = new Frog(this.stage(1), this.start_col);
    this.elements = [];

    // create cars
    this.elements.push(new Car(this.stage(2), 0, 0.05));
    this.elements.push(new Car(this.stage(3), 5, -0.05));
    this.elements.push(new Car(this.stage(4), 0, 0.05));
    this.elements.push(new Car(this.stage(5), 7, -0.05));

    //create pavement
    let pavement = new Surface(this.stage(6), 0, this.nb_col, 0, 0);
    pavement.color = 'grey';
    this.elements.push(pavement);

    //create water_line and logs
    this.create_water_line(7);
    this.create_water_line(8);
    this.create_water_line(9);

  }

  create_water_line(lvl) {
    let water_line = new Water(this.stage(lvl), this.nb_col);
    let log = new Log(this.stage(lvl), 0, this.random_width(4), this.random_speed(0.08));
    water_line.addLog(log);
    this.elements.push(water_line);
    this.elements.push(log);
  }

  
  update() {

    //update frog position
    this.frog.update(this.nb_col);

    //update position 
    this.elements.map((element) =>  element.update(this.nb_col));

    //check interaction for all elements
    this.elements.map((element) =>  element.interact(this.frog));
    

    //reset frog position if game over
    if (this.frog.isGameOver(this.nb_row, this.nb_col)) {
      this.frog = new Frog(this.stage(1), this.start_col);
    } 
  }

  setInputs(inputs) {
    inputs.register_key_events((key) => {

      if (key.isLeft()) this.frog.go_left();
      if (key.isRight()) this.frog.go_right();
      if (key.isUp()) this.frog.go_up();
      if (key.isDown()) this.frog.go_down();

    });
  }

  
  stage(st) {
    return this.nb_row - st;
  }

  getSurfaces() {
    return this.elements;
  }

  random_speed(max) {
    let val = Math.random() * max;
    const sign = (Math.random() > 0.5) ? 1 : -1;
    return sign * val;
  }

  random_width(max) {
    return Math.max(1, Math.floor(Math.random() * max));
  }
}