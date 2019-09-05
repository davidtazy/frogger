'use strict';

//const expect = require('chai').expect;
//const should = require('chai').should()
import {assert} from 'chai';
import 'chai/register-should';
import data_driven from 'mocha-data-driven';

import Surface from '../src/Surface';
import Car from '../src/Car';
import HorizontalMovingSurface from '../src/HorizontalMovingSurface';

describe('car', () => {
    it('should be an horizontal moving surface', (done) => {
        const car = new Car(1, 1, 1);
        
        //car.should.be.an('Car')
        done();
    });
    it('should have a width of one', (done) => {
        const car = new Car(1, 1, 1);
        assert.strictEqual(car.w,1);
        done();
    });
});

describe("Surface movement", () => {

    it('should not move by default', (done) => {

        const a = new Surface(1, 1, 1);
        a.xspeed.should.equal(0);
        a.yspeed.should.equal(0);

        a.left().should.equal(1);
        a.col.should.equal(1);
        a.update();
        a.left().should.equal(1);
        a.col.should.equal(1);

        done();
    });

    it('should move to the right is xspeed is >0', (done) => {
        const xspeed = 1;
        const a = new Surface(1, 1, 1, xspeed);

        a.update();
        assert.equal(a.left(), 2);
        assert.equal(a.row, 1);
        done();

    });
    it('should move down when yspeed is >0', (done) => {
        const yspeed = 1;
        const a = new Surface(1, 1, 1, 0, yspeed);

        a.update();

        assert.equal(a.row, 2);
        done();

    });
});

describe('horizontal surface', () => {



    data_driven([{ obj_width: 3, speed: 0.1 }, { obj_width: 2, speed: 0.1 }, { obj_width: 1, speed: 0.1 },
    { obj_width: 3, speed: -0.1 }, { obj_width: 2, speed: -0.1 }, { obj_width: 1, speed: -0.1 }], function () {

        it('should cycle along row when updating', (ctx) => {
            console.log(ctx);

            const nb_col = 6;
            const col = 5;
            const width = ctx.obj_width;
            const speed = ctx.speed;
            const obj = new HorizontalMovingSurface(1, col, width, speed);


            let last_col = obj.col;

            const min = obj.col - Math.abs(1 * speed);
            const max = obj.col + Math.abs(1 * speed);

            obj.update(nb_col);
            if (speed > 0) {
                assert.isAbove(obj.col, col);
            } else {
                assert.isBelow(obj.col, col);
            }
            do {
                obj.update(nb_col);
                assert.notEqual(obj.col, last_col);
                last_col = obj.col;


            } while (obj.col < min || obj.col > max);


        });
    });
});

describe('surface interaction', function () {


    // it() lets you comment on what an individual test is about.
    it('should not intersect when a.left > b.right', function (done) {
        const row = 1;
        const width = 2;
        const a = new Surface(row, 6, width);
        const b = new Surface(row, 4, width);
        assert.ok(a.left() > b.right());
        assert.ok(a.avoid(b));
        assert.ok(b.avoid(a));
        // done tells the program the test is complete.
        done();
    });

    it('should not intersect when not in same row', function (done) {
        const col = 1;
        const width = 2;
        const a = new Surface(1, col, width);
        const b = new Surface(2, col, width);

        assert.ok(a.avoid(b));
        assert.ok(b.avoid(a));
        assert.ok(!a.collide(b));
        // done tells the program the test is complete.
        done();
    });


    it('should intersect on same row and included or toucch left or right ', function (done) {

        const row = 1, w = 3;
        const ref = new Surface(row, 5, w);
        const left = new Surface(row, 3, w);
        const right = new Surface(row, 7, w);
        const include = new Surface(row, 5, 1);



        assert.ok(ref.collide(left));
        assert.ok(left.collide(ref));

        assert.ok(ref.collide(right));
        assert.ok(right.collide(ref));

        assert.ok(ref.collide(include));
        assert.ok(include.collide(ref));


        // done tells the program the test is complete.
        done();
    });
});