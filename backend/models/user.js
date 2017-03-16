var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  lastname: String,
  firstname: String,
  wallet: Number,
  waiting_wallet: Number
});

module.exports = mongoose.model('Users', userSchema);
