'use strict';

const expect = require('chai').expect;
const should = require('chai').should()
const assert = require('chai').assert;
const data_driven = require('mocha-data-driven')

const Surface = require('../Surface');
const Car = require('../Car');
const Frog = require('../Frog');

describe('frog', () => {
    it('should be a surface', (done) => {
        const frog = new Frog(1, 1);
        //car.should.be.an('Car')
        done()
    });
    it('should have a width of one', (done) => {
        const frog = new Frog(2, 2);
        assert.strictEqual(frog.w,1);
        done()
    });

    it('can move down',(done)=>{
        const frog = new Frog(1, 1);
        frog.go_down();
        assert.equal(frog.row, 2)
        done()
    });

    it('can move up',(done)=>{
        const frog = new Frog(1, 1);
        frog.go_up();
        assert.equal(frog.row, 0)
        done()
    });

    it('can move left',(done)=>{
        const frog = new Frog(1, 1);
        frog.go_left();
        assert.equal(frog.col, 0)
        done()
    });

    it('can move right',(done)=>{
        const frog = new Frog(1, 1);
        frog.go_right();
        assert.equal(frog.col, 2)
        done()
    });
});