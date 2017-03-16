var User = require('./models/user.js');

module.exports.getUser = function (firstname, lastname) {
  return User.findOne({lastname: lastname, firstname: firstname}).exec();
}

module.exports.getTruc = function() {
  return true;
}
