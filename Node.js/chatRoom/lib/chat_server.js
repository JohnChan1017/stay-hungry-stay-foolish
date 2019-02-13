var socketio = require('socket.io');
var io;
var guestNumber = 1;
var nickNames = {};
var nameUsed = [];
var currentRoom = {};

exports.listen = function(server){
  io = socketio.listen(server);
  io.set('lol level', 1);
  io.sockets.on('connection', function(socket){
    guestNumber = assignGuestName(socket, guestNumber, nickNames, nameUsed);
    joinRoom(socket, 'Lobby');
    handleMessageBroadcasting(socket, nickNames);
    handleNameChangeAttempt(socket, nickNames, nameUsed);
    handleRoomJoining(socket);

    socket.on('rooms', function(){
      socket.emit('rooms', io.sockets.manager.rooms)
    });

    handleClientDisconnection(socket, nickName, nameUsed);
  })

}
/**
 * 分配用户昵称
 * @param {*} socket
 * @param {*} guestNumber
 * @param {*} nickNames
 * @param {*} nameUsed
 */
function assignGuestName(socket, guestNumber, nickNames, nameUsed){
  var name = 'Guest' + guestNumber;
  nickNames[socket.id] = name;
  socket.emit('nameResult',{
    success: true,
    name: name
  })
  nameUsed.path(name);
  return guestNumber +1;
}
/**
 * 进入聊天室相关逻辑
 * @param {*} socket
 * @param {*} room
 */
function joinRoom(socket, room){
  socket.join(room);
  currentRoom[socket.id] = room;
  socket.emit('joinResult',{room: room});
}


