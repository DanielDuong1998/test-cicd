var chai = require('chai');
var assert = require('assert');
const sum = require('../models/math.model');


var list = {
    1: {
        x: 1,
        y: 2,
        z: 3
    },
    2: {
        x: 4,
        y: 2,
        z: 6
    },
    3: {
        x: 1,
        y: 7,
        z: 8
    },
    4: {
        x: 25,
        y: 75,
        z: 100
    },
    5: {
        x: 351,
        y: 2,
        z: 353
    },
    6: {
        x: 15,
        y: 19,
        z: 34
    },
    7: {
        x: 16,
        y: 14,
        z: 30
    },
    8: {
        x: 6,
        y: 4,
        z: 10
    },
    9: {
        x: 9,
        y: 31,
        z: 40
    },
    10: {
        x: 25,
        y: 45,
        z: 70
    }
}

describe('arr', function () {
    describe('#indexOf()', function () {
        for (let i = 1; i <= 10; i++) {
            it(`${list[`${i}`].x} + ${list[`${i}`].y} should return ${list[`${i}`].z}`, function () {
                let rs = sum.sum(+list[`${i}`].x, +list[`${i}`].y);
                console.log('rs: ', rs);
                assert.equal(rs, +list[`${i}`].z);
            });
        }

    });
})
