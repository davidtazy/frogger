'use strict';

const expect = require('chai').expect;
const should = require('chai').should()
const assert = require('chai').assert;
const data_driven = require('mocha-data-driven')

const Surface = require('../Surface');
const Car = require('../Car');
const Frog = require('../Frog');
const Log = require('../Log');

describe('log', () => {
    it('should be attachable', (done) => {
        const log = new Log(1, 1,3);
        assert.isFunction(log.attachable)

        assert.isTrue(typeof log.attachable === 'function')

        assert.isTrue(log.isAttachable())

        done()
    });
    


});
