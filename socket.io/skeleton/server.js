var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);

server.listen(8001);


app.use(express.static("public", __dirname + "/public"));

app.get('/', function (req, res) {
    res.render('index.html');
});

io.sockets.on('connection', function (socket) {
    //TODO: sett inn socket.io logikk for å sende/motta meldinger
});


