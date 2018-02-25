'use strict'
var express = require('express');
var bcrypt = require("bcrypt-nodejs");
var jwt = require('jwt-simple');
var mongoose = require('mongoose');
var pass = "moa_foca_niga_bich";
var t;
var Users = require('../models/usuario');

// console.log(User);
var access = (req, res) => {
  var params = req.body;
  if (params.password) {
    let password = params.password;
    Users.findOne(({email: params.email}), ({password:1, _id:0, name:1,lastName:1,image:1,date:1, phone:1, token:1}), (err, user) => {
      if (!user) {
        res.status(500).send({message: "no existe el usuario"});
      }else {
        // bcrypt.compare(params.password, user.password, (err, check) => {
          bcrypt.compare("password", user.password, (err, check)=>{
          // res.status(200).send(user.password);
          if (check) {
            var usuario = JSON.parse(JSON.stringify(user));
            usuario.token = jwt.encode(user, pass);
            jwt.createToken(user)
            console.log(t);
            res.status(200).send(usuario);
          }else {
            // res.status(500).send({message: user.password});
            res.status(500).send({message: "contraseña incorrecta",err});
          }

        });
      }
    });
  }else {
    res.status(500).send({message: "no se pudo crear el token"});
  }
}

var register = (req, res) => {
  var params = req.body;
    var user = new Users();
  if (params.password) {
    user.name = params.name;
    user.lastName = params.lastName;
    user.phone = params.phone;
    user.email = params.email;
    user.date = new Date();
    user.newsletter = params.newsletter;

        bcrypt.hash(params.password,null, null,  (err, hash) => {
          if (!err) {
            if (params.name && params.lastName && params.phone && params.email && params.password ) {
              Users.findOne({email: params.email}, (err2, exist) => {
                  if (!exist) {
                    user.password = hash;
                    user.save((err3, saved) => {
                      if (err3) {
                        res.status(200).send({message: "No se pudo registrar el usuario", hash: hash});
                      }else {
                        res.status(200).send({message: "Se registro el usuario", hash: hash});
                      }
                    });
                  }else{
                    res.status(500).send({message: "Este correo ya fue registrado", hash: hash});
                  }
              });

            }else {
              res.status(500).send({message: "Todos los campos son requeridos"});
            }
          }
        })

  }else {
    res.status(200).send({message: "todos loas datos son requeridos"});
  }
}
module.exports = {
  access,
  register,
  t
};
