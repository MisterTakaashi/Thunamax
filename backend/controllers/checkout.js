var cardChecker = require('../card.js');

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

  res.json({status: true});
}
