var socket_io = require('socket.io');
var io = socket_io();
var socketApi = {};

socketApi.io = io;

// io.on('connection', function(socket){
//     console.log('A user connesdfsdcted');
// });

// socketApi.sendNotification = function() {
//     io.sockets.emit('hello', {msg: 'Hello World!'});
// }
// console.log(io);
module.exports = socketApi;
