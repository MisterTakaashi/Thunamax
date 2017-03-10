var mongoose = require('mongoose');
var process = require('process');

if (process.env.NODE_ENV == 'test'){
  mongoose.connect('mongodb://localhost/thunamax_test');
}else{
  mongoose.connect('mongodb://localhost/thunamax');
}

module.exports.hasMoney = function (amount) {
  return false;
}
