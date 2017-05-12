
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var usernames = [''];
server.listen(80);

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    // socket.on('my other event', function(data) {
    // socket.broadcast.emit('server response', {checkbox: data.checkbox});
    //     console.log(data.checkbox);
    //     if(data) {
    //         socket.emit('server response', {checkbox: data.checkbox});
    //     }
    // })

    socket.on('username', function(data) {
        console.log(data);
       usernames.push(data);
       socket.broadcast.emit('username response', {usernames: usernames[usernames.length-1] })
    });
});