var mongoose = require('mongoose');

var RegistrationSchema = new mongoose.Schema({
  nik_name: String,
  your_name: String,
  email: String,
  pass: String,
  confirm_pass: String,
  coints: Number,
  hero: String,
  status: String,
  lvl: Number,
  top_position: Boolean,
  updated_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Registration', RegistrationSchema); // '  ' - Имя .js файла - модуля(шаблона)
