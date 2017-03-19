var cardChecker = require('../card.js');
var user = require('../user.js');

// POST /checkout
exports.create = function (req, res) {
  // let card = JSON.parse(req.body.card);
  let card = req.body.card;

  let cardResult = cardChecker.checkCard(card);
  if (!cardResult.status){
    res.json({status: false, error: cardResult.error});
    return;
  }

  // Vérification du montant du paiement
  let amount = req.body.amount;
  if (amount == undefined){
    res.json({status: false, error: "Le montant du paiement doit être renseigné"});
    return;
  }
  if (!new RegExp(/^\d+$/).test(amount)){
    res.json({status: false, error: "Le montant du paiement doit être un nombre"});
    return;
  }

  user.getUser(card.firstname, card.lastname).then((userFound) => {
    if (userFound === null){
      res.json({status: false, error: "Client introuvable"});
      return;
    }else{
      user.pay(userFound, amount);
      res.json({status: true});
      return;
    }
  });

  // res.json({status: true});
}
