var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var mongoose = require("mongoose");

chai.use(chaiAsPromised);
var expect = chai.expect;

describe('test file user', function(){
  beforeEach(function() {
    mongoose.createConnection('mongodb://localhost/thunamax_test');
    mongoose.models = {};
    mongoose.modelSchemas = {};
    user = require('../../backend/user.js');
  });

  describe('#getUser method' , function() {
    it('user must be found', function(done) {
      // console.log(user.getUser('Machin', 'Truc'));
      var truc = user.getUser('Machin', 'Truc');
      expect(truc).to.eventually.have.property("wallet").and.notify(done);
      // expect(user.getUser('Machin', 'Truc')).to.have.property('izdqzdzqdzqd').and.notify(() => { console.log("OK !!!"); });
      // user.getUser(50).resolve(user).to.equal(true).notify(() => {
      //   console.log("C'ets fait");
      // });
      // expect(user).to.equal(true);
    });
  });

  // describe('#getTruc method' , function() {
  //   it('getTruc must be equal Blabla', function(done) {
  //     expect(Promise.resolve(user.getTruc())).to.true.and.notify(done)
  //   });
  // });
});
