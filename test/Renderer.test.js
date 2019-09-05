'use strict';

let chai = require('chai')
    , chaiJsonEqual = require('chai-json-equal');

chai.use(chaiJsonEqual);

const expect = require('chai').expect;
const should = require('chai').should()
const assert = require('chai').assert;
const data_driven = require('mocha-data-driven')

import Frog from '../src/Frog'
import Game from '../src/Game'
import Renderer from '../src/Renderer'
import sinon from 'sinon';
import Surface from '../src/Surface';
//import p5 from '../lib/p5'


class p5_fake {
    constructor() {
        this.width = 200
        this.height = 100

    }

    createCanvas(width, height) {}
    ellipse(){}
    rect(x,y,w,h){}
    fill(r,g,b){}
}

describe('Renderer transformations', () => {

    let game, p5, r;

    before(() => {
        game = new Game(10, 10, 1);
        p5 = new p5_fake();
        r = new Renderer(p5, game);
    });


    data_driven([{ col: 0, x: 0 }, { col: 1, x: 20 }, { col: -1, x: -20 }], function () {
        it("should transform column number to x position", (ctx) => {
            console.log(ctx);
            assert.equal(r.colToX(ctx.col), ctx.x)
        });

    });

    data_driven([{ row: 0, y: 0 }, { row: 1, y: 10 }, { row: -1, y: -10 }], function () {
        it("should transform row number to y position", (ctx) => {
            console.log(ctx);
            assert.equal(r.rowToY(ctx.row), ctx.y)

        });
    });


    it("should transform col distance to width", (done) => {

        assert.equal(r.lenToWidth(0), 0);
        assert.equal(r.lenToWidth(1), 20);
        assert.equal(r.lenToWidth(2), 40);
        assert.equal(r.unitHeight(), 10);
        done()
    });

    it('should transform rect grid coordinates to canvas ', (done) => {
        const surf = new Surface(1, 1, 3);

        r.toCanvas(surf).should.jsonEqual({
            x: 20,
            y: 10,
            width: 60,
            height: 10
        });

        done();

    });

    it('should draw all elements',(done)=>{
        var spy = sinon.spy(p5, "rect");
        
        r.draw();

        
       // assert.typeOf(spy.lastCall,Frog);

        done();
    });

});