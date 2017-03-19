var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');
var process = require('process');

// Controllers
var checkoutCtrl = require('./controllers/checkout.js');

var app = express();

mongoose.connect('mongodb://localhost/thunamax_' + process.env.NODE_ENV);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/checkout', checkoutCtrl.create);

app.listen(4040, function () {
  console.log('Example app listening on port 4040!');
});
