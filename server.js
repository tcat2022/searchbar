const io = require('socket.io')(3000, {cors: {origin: "*"}})
const cors = require('cors')
io.on('connection', socket => {
    cors({
        origin: "*"
    })
    socket.emit('chat-message', 'hello world') 
})

