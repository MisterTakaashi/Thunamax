var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
var expect = chai.expect

describe('test file user', function(){
  beforeEach(function() {
      user = require('../user.js');
  });

  describe('#getUser method' , function() {
    it('user must be found', function(done) {
      // console.log(user.getUser('Machin', 'Truc'));
      expect(user.getUser('Machin', 'Truc')).to.eventually.have.property("wallet").and.notify(done);
      // expect(user.getUser('Machin', 'Truc')).to.have.property('izdqzdzqdzqd').and.notify(() => { console.log("OK !!!"); });
      // user.getUser(50).resolve(user).to.equal(true).notify(() => {
      //   console.log("C'ets fait");
      // });
      // expect(user).to.equal(true);
    });
  });
});
