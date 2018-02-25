'use strict'
var express = require('express');
var sockets = require('./socketApi');
// var io = require('../app.js');

var index = (req, res) => {
  res.render('index', {
    title: 'Express'
  });
}

var login = (req, res) => {
  res.render('login', {
    title: 'Express'
  });
}

var capture = (req, res) => {
  // sockets.io.of('/capture').on('connection', function(socket){
  //   socket.on('message', function(data){
  //     socket.emit('message',{message:data,id:socket.id});
  //   });
  // });

  res.render('capture', {
    title: 'Express'
  });
}


var viewCam = (req, res) => {
  // sockets.io.on('connection', function(socket){
  //   socket.emit('message',"sfsdfsdfsdfsd");
  //   socket.on('message', function(data){
  //     socket.emit('message',{message:data, id:socket.id});
  //   });
  // });
  res.render('viewcam', {
    title: 'Express'
  });
}
module.exports = {
  index,
  capture,
  viewCam,
  login
};
