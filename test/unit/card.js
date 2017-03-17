var expect = require('chai').expect

describe('test file card', function(){
  beforeEach(function() {
      cardChecker = require('../../backend/card.js');
  });

  describe('#checkCard method' , function() {
    it('card has no property expiration', function() {
      var card = {
        number: 5664545421214578,
        cvv: 254
      };
      var result = cardChecker.checkCard(card);
      expect(result).to.have.property('status', false);
      expect(result).to.have.property('error', "La date d'expiration doit être renseignée");
    });

    it('card has invalid property expiration', function() {
      var card = {
        expiration:  "Septembre 2017",
        number: 5664545421214578,
        cvv: 254
      };
      var result = cardChecker.checkCard(card);
      expect(result).to.have.property('status', false);
      expect(result).to.have.property('error', "La date d'expiration est incorrecte");
    });

    it('card has no property number', function() {
      var card = {
        expiration:  "07/17",
        cvv: 254
      };
      var result = cardChecker.checkCard(card);
      expect(result).to.have.property('status', false);
      expect(result).to.have.property('error', "Le numéro de carte doit être renseigné");
    });

    it('card has invalid property number', function() {
      var card = {
        expiration:  "07/17",
        number: 54545,
        cvv: 254
      };
      var result = cardChecker.checkCard(card);
      expect(result).to.have.property('status', false);
      expect(result).to.have.property('error', "Le numéro de carte est incorrect");
    });

    it('card has no property cvv', function() {
      var card = {
        expiration:  "07/17",
        number: 5664545421214578
      };
      var result = cardChecker.checkCard(card);
      expect(result).to.have.property('status', false);
      expect(result).to.have.property('error', "Le crytpogramme de sécurité doit être renseigné");
    });

    it('card has invalid property cvv', function() {
      var card = {
        expiration:  "07/17",
        number: 5664545421214578,
        cvv: 245457
      };
      var result = cardChecker.checkCard(card);
      expect(result).to.have.property('status', false);
      expect(result).to.have.property('error', "Le crytpogramme de sécurité est incorrect");
    });

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
