var cors = require('cors');
app.use(cors({origin: "*"}));
const io = require('socket.io')(3000);

io.on('connection', socket => {
    socket.emit('chat-message', 'hello world')
})