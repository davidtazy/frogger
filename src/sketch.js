import Game from './Game';
import Renderer from './Renderer';
import Inputs from './Inputs';

let game;
let renderer;
let inputs;
let s = (p5js) => {
    p5js.setup = () => {
        console.log('setup');

        inputs = new Inputs(p5js);
        game = new Game(10,10,1);
        game.setInputs(inputs);
        renderer = new Renderer(p5js,game);
    };

    p5js.draw = () => {
        p5js.background(51);


        renderer.draw();
        
    };
};

const myP5 = new p5(s,document.getElementById('p5sketch'));