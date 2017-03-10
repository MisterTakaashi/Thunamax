var expect = require('chai').expect

describe('test file user', function(){
  beforeEach(function() {
      user = require('../user.js');
  });

  describe('#hasMoney method' , function() {
    it('user must have money', function() {
      var result = user.hasMoney(50);
      expect(result).to.equal(true);
    });
  });
});
