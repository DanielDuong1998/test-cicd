var assert = require('assert');
describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});


// var chai = require('chai');
// var chaiHttp = require('chai-http');
// var server = require('../app');
// var should = chai.should();
// chai.use(chaiHttp);

// var list = {
//     1: {
//         x: 1,
//         y: 2,
//         z: 3
//     },
//     2: {
//         x: 4,
//         y: 2,
//         z: 6
//     },
//     3: {
//         x: 1,
//         y: 7,
//         z: 8
//     },
//     4: {
//         x: 25,
//         y: 75,
//         z: 100
//     },
//     5: {
//         x: 351,
//         y: 2,
//         z: 353
//     },
//     6: {
//         x: 15,
//         y: 19,
//         z: 34
//     },
//     7: {
//         x: 16,
//         y: 14,
//         z: 30
//     },
//     8: {
//         x: 6,
//         y: 4,
//         z: 10
//     },
//     9: {
//         x: 9,
//         y: 31,
//         z: 40
//     },
//     10: {
//         x: 25,
//         y: 45,
//         z: 70
//     }
// }

// describe('sum', function () {
//     // for (let i = 1; i <= 10; i++) {
//     //     it(`${list[`${i}`].x} + ${list[`${i}`].y} should return ${list[`${i}`].z}`, function (done) {
//     //         chai.request(server)
//     //             .get(`/sum?x=${list[`${i}`].x}&y=${list[`${i}`].y}`)
//     //             .end((err, res) => {
//     //                 res.should.have.status(200);
//     //                 res.body.rs.should.be.eql(list[`${i}`].z);
//     //                 done();
//     //             });
//     //     });
//     // }

//     let i = 1;
//     it(`${list[`${i}`].x} + ${list[`${i}`].y} should return ${list[`${i}`].z}`, function (done) {
//         chai.request(server)
//             .get(`/sum?x=${list[`${i}`].x}&y=${list[`${i}`].y}`)
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 res.body.rs.should.be.eql(list[`${i}`].z);
//                 done();
//             });
//     });
//     i = 2;

//     it(`${list[`${i}`].x} + ${list[`${i}`].y} should return ${list[`${i}`].z}`, function (done) {
//         chai.request(server)
//             .get(`/sum?x=${list[`${i}`].x}&y=${list[`${i}`].y}`)
//             .end((err, res) => {
//                 res.should.have.status(200);
//                 res.body.rs.should.be.eql(list[`${i}`].z);
//                 done();
//             });
//     });

// });