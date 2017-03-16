var expect = require('chai').expect

describe('test file card', function(){
  beforeEach(function() {
      cardChecker = require('../../backend/card.js');
  });

  describe('#checkCard method' , function() {
    it('card must be valid', function() {
      var card = {
        expiration:  "07/17",
        number: 5664545421214578,
        cvv: 254
      };
      var result = cardChecker.checkCard(card);
      expect(result).to.have.property('status', true);
    });
  });
});
