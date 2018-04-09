var mongoose = require('mongoose');

var RegistrationSchema = new mongoose.Schema({
  nik_name: String,
  your_name: String,
  email: String,
  pass: String,
  confirm_pass: String,
  updated_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('game-table', RegistrationSchema);
