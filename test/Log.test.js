'use strict';

const expect = require('chai').expect;
const should = require('chai').should()
const assert = require('chai').assert;
const data_driven = require('mocha-data-driven')

import Surface from '../src/Surface';
import Car from '../src/Car';
import Frog from '../src/Frog';
import Log from '../src/Log';

describe('log', () => {
    it('should be attachable', (done) => {
        const log = new Log(1, 1,3);
        const frog = new Frog(1,1);

        assert.isTrue(log.interact(frog));
        assert.isFalse(frog.isGameOver(2,2));
        assert.deepStrictEqual(frog.on_log,log);

        done();
    });
    


});
