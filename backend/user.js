var User = require('./models/user.js');

module.exports.getUser = function (firstname, lastname) {
  return User.findOne({lastname: lastname, firstname: firstname}).exec();
}

module.exports.canPay = function (user, amount) {
  if (user.wallet >= amount * 5){
    return true;
  }else{
    return false;
  }
}

module.exports.pay = function (user, amount) {
  user.wallet -= amount;
  user.waiting_wallet += amount;
  user.save();
  return true;
}
