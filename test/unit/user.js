var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var mongoose = require("mongoose");
mongoose.Promise = Promise;

chai.use(chaiAsPromised);
var expect = chai.expect;

describe('test file user', function(){
  beforeEach(function() {
    mongoose.connect('mongodb://localhost/thunamax_test');
    mongoose.models = {};
    mongoose.modelSchemas = {};
    user = require('../../backend/user.js');
  });

  afterEach(function() {
    mongoose.disconnect();
  });

  describe('#getUser method' , function() {
    it('user must be found', function(done) {
      expect(user.getUser('Machin', 'Truc')).to.eventually.have.property("wallet").and.notify(done);
    });
  });
});
