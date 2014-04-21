var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);

server.listen(8001);


app.use(express.static("public", __dirname + "/public"));

app.get('/', function (req, res) {
    res.render('index.html');
});

var usernames = {};

var rooms = ['chatroom'];

io.sockets.on('connection', function (socket) {
    // when the client emits 'adduser', this listens and executes
    socket.on('adduser', function(username){
        socket.username = username;
        socket.room = rooms[0];
        usernames[username] = username;
        socket.join(rooms[0]);
        socket.emit('updatechat', 'SERVER', 'you have connected to ' + rooms[0]);
        socket.broadcast.to(rooms[0]).emit('updatechat', 'SERVER', username + ' has connected to this room');
    });

    // when the client emits 'sendchat', this listens and executes
    socket.on('sendchat', function (data) {
        io.sockets.in(socket.room).emit('updatechat', socket.username, data);
    });

    // when the user disconnects.. perform this
    socket.on('disconnect', function (){
        delete usernames[socket.username];
        socket.broadcast.emit('updatechat', 'SERVER', socket.username + ' has disconnected');
        socket.leave(socket.room);
    });
});