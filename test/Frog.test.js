'use strict';

const expect = require('chai').expect;
const should = require('chai').should()
const assert = require('chai').assert;
const data_driven = require('mocha-data-driven')

const Surface = require('../src/Surface');
const Car = require('../src/Car');
const Log = require('../src/Log');
const Frog = require('../src/Frog');

describe('frog and other surface',() =>{
    it('should attach to logs if intersects',(done)=>{
        const frog = new Frog(1,1);
        const log = new Log(1,0,3,1);

        assert.isTrue(log.interact(frog));
        assert.isTrue(frog.xspeed === log.xspeed);

        done();
    });

    it('should hits cars if intersects',(done)=>{
        const frog = new Frog(1,1);
        const car = new Car(1,1,1);

        assert.isTrue(car.interact(frog));
        assert.isTrue(frog.isGameOver(1,1));
        
        done();
    });

    xit('should drawn on water',(done)=>{



    });
});


describe('frog', () => {
    it('should be a surface', (done) => {
        const frog = new Frog(1, 1);
        //car.should.be.an('Car')
        done()
    });
    it('should have a width of one', (done) => {
        const frog = new Frog(2, 2);
        assert.strictEqual(frog.w, 1);
        done()
    });

    it('can move down', (done) => {
        const frog = new Frog(1, 1);
        frog.go_down();
        assert.equal(frog.row, 2)
        done()
    });

    it('can move up', (done) => {
        const frog = new Frog(1, 1);
        frog.go_up();
        assert.equal(frog.row, 0)
        done()
    });

    it('can move left', (done) => {
        const frog = new Frog(1, 1);
        frog.go_left();
        assert.equal(frog.col, 0)
        done()
    });

    it('can move right', (done) => {
        const frog = new Frog(1, 1);
        frog.go_right();
        assert.equal(frog.col, 2)
        done()
    });
});

describe('position', () => {
    const off_grid_datas=[
        {row:-1,col:3},
        {row:10,col:3},
        {row:3,col:10},
        {row:3,col:-1},
    ];

  
    data_driven(off_grid_datas, () => {
        it('offgrid ', (ctx) => {
            console.log(ctx)
            const nb_row = 10,nb_col =10;

            const frog = new Frog(ctx.row,ctx.col);
            assert.isTrue(frog.isGameOver(nb_row,nb_col));
            
        });
    });
    const in_grid_datas=[
        {row:0,col:3},
        {row:3,col:0},
        {row:9,col:3},
        {row:3,col:9},
    ];
    data_driven(in_grid_datas, () => {
        it(' ongrid', (ctx) => {
            console.log(ctx)
            const nb_row = 10,nb_col =10;

            const frog = new Frog(ctx.row,ctx.col);
            assert.isFalse(frog.isGameOver(nb_row,nb_col));
            
        });
    });
})