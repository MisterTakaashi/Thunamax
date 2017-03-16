var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');
var process = require('process');

var cardChecker = require('./card.js');

var app = express();

mongoose.connect('mongodb://localhost/thunamax_' + process.env.NODE_ENV);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/checkout', function(req, res) {
  // let card = JSON.parse(req.body.card);
  let card = req.body.card;

  console.log(card);

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
})

app.listen(4040, function () {
  console.log('Example app listening on port 4040!');
});
