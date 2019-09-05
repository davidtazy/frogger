'use strict';

//const expect = require('chai').expect;
//const should = require('chai').should()
//const assert = require('chai').assert;
//const data_driven = require('mocha-data-driven');

import {assert} from 'chai'

 import Inputs from '../src/Inputs';
// import Car from '../src/Car';
// import HorizontalMovingSurface from '../src/HorizontalMovingSurface';

class p5{
    constructor(){
    this.LEFT_ARROW = 1;
    this.RIGHT_ARROW = 2;
    this.DOWN_ARROW = 3;
    this.UP_ARROW = 4;
    this.keyPressed = undefined;
    this.keyCode=0;
    }
}

describe('Inputs ', () => {
    it('should capture key code', (done) => {
        const p = new p5;
        const inp = new Inputs(p);

        p.keyCode = p.LEFT_ARROW; 
        assert.isOk(inp.isLeft());

        p.keyCode = p.RIGHT_ARROW; 
        assert.isOk(inp.isRight());

        p.keyCode = p.UP_ARROW; 
        assert.isOk(inp.isUp());

        p.keyCode = p.DOWN_ARROW; 
        assert.isOk(inp.isDown());

        done();
    });

    it('should trig registered callback on jey pressed ',(done)=>{
        const p = new p5;
        const inp = new Inputs(p);

        p.keyCode = p.LEFT_ARROW; 

        let cpt=0;

        inp.register_key_events((key)=>{
            assert.instanceOf(key,Inputs);
            cpt++;
        });

        p.keyPressed();

        assert.equal(cpt , 1);

        done();
    });
});
