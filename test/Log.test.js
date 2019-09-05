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
        assert.isFunction(log.attachable)

        assert.isTrue(typeof log.attachable === 'function')

        assert.isTrue(log.isAttachable())

        done()
    });
    


});
