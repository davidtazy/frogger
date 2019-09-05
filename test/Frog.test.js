'use strict';

const expect = require('chai').expect;
const should = require('chai').should()
const assert = require('chai').assert;
const data_driven = require('mocha-data-driven')

import  Surface from '../src/Surface';
import  Car from '../src/Car';
import  Log from '../src/Log';
import  Frog from '../src/Frog';
import  Water from '../src/Water';

describe('frog and other surface',() =>{
    it('should attach to logs if intersects',(done)=>{
        const frog = new Frog(1,1);
        const log = new Log(1,0,3,1);

        assert.isTrue(log.interact(frog));
        assert.isTrue(frog.on_log === log);

        done();
    });

    it('should hits cars if intersects',(done)=>{
        const frog = new Frog(1,1);
        const car = new Car(1,1,1);

        assert.isTrue(car.interact(frog));
        assert.isTrue(frog.isGameOver(1,1));
        
        done();
    });

    it('should drawn on water ',(done)=>{
        const frog = new Frog(1,1);
        const water = new Water(1,5);

        assert.isTrue(water.interact(frog));
        assert.isTrue(frog.isGameOver(1,1));
        
        done();


    });

    it('should not interact if not intersecting',(done)=>{
        const frog = new Frog(3,1);
        const water = new Water(1,1,1,1);
        const car = new Car(1,1,1);
        const log = new Log(1,0,3,1);

        assert.isFalse(water.interact(frog));
        assert.isFalse(water.interact(frog));
        assert.isFalse(car.interact(frog));
        assert.isFalse(log.interact(frog));

        done()

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