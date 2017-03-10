var mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');
var process = require('process');

if (process.env.NODE_ENV == 'test'){
  mongoose.connect('mongodb://localhost/thunamax_test');
}else{
  mongoose.connect('mongodb://localhost/thunamax');
}

var User = mongoose.model('users', { lastname: String, firstname: String, wallet: Number, waiting_wallet: Number });

module.exports.getUser = function (firstname, lastname) {
  return User.findOne({lastname: lastname, firstname: firstname}).exec();
}
