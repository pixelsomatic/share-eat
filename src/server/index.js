const path = require(' path ');
const express = require (' express ');
const app = express ();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, '../../build')));

app.get('/', (req, res, next) => 
    res.sendFile(__dirname + './index.html'));

    //sockets teste
io.on('connection', socket => 
    socket.emit('hello', {message: 'hello from server!' }));

    
    server.listen(port);