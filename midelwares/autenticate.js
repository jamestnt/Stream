var express = require('express');
var moment = require('moment');
var jwt = require('jwt-simple');
var pass = "moa_foca_niga_bich";
var api = require('../controllers/api');
var router = express.Router();

exports.valUser = (req, res, next) =>{
  // var token = req.headers.autorization;
  // if (token) {
  //
  // }
  // console.log("//////////////////////////////////////////////////////////////////////////////////");
  // console.log(api);
//   var token = jwt.decode(api.t, pass)
// console.log(token.exp);
next();
}
