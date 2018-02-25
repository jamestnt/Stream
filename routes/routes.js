var express = require('express');
var router = express.Router();
var views = require('../controllers/views');
var api = require('../controllers/api');
var midelware = require('../midelwares/autenticate');
var sockets = require('../controllers/socketApi');

router.get('/', views.index);

sockets.io.on('connection', function(socket){
  // socket.emit('message',"routes socket");
  socket.on('message', function(data){
    // console.log(data);
    sockets.io.emit('message',data);
  });
});

router.get('/iniciar-secion', views.login);
router.get('/inicio', midelware.valUser, views.index);
router.get('/view-cam', midelware.valUser, views.viewCam);
router.get('/capture', views.capture);
router.post('/api/access', api.access);
router.post('/api/register', api.register);

module.exports = router;
