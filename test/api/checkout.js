var expect = require('chai').expect;
var request = require('request');

describe('test controller checkout', function(){
  beforeEach(function() {
    cardChecker = require('../../backend/controllers/checkout.js');
  });

  describe('#create method' , function() {
    it('checkout has no amount', function(done) {
      request
        .post({
          url:'http://localhost:4040/checkout',
          form: {
            card: {
              expiration:  "07/17",
              number: 5664545421214578,
              cvv: 254
            },
            amount: 50
          },
          json: true
        }, function(err,httpResponse,body){
          expect(body).to.have.property('status', true);
          done();
        });
    });
  });
});
