'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
  name: String,
  lastName: String,
  phone: String,
  email: String,
  image: String,
  password: String,
  newsletter: String,
  date: String
});

module.exports = mongoose.model('user', userSchema);
