const app = require('express')(),
      http = require('http').createServer(app),
      io = require('socket.io')(http),
      cors = require('cors'),
      PORT = 3500;

app.use(cors());

io.on('connection', (socket) => {

    socket.on('joinRoom', (user) => {
        socket.join(user.room);
    })

    socket.on('sendMessage', (data) => {
        io.in(data.room).emit('message', data)
    })

    socket.on('disconnect', () => {
        console.log('disconnected');
    })
})

app.get('/', (req, res) => {
    res.send("Server is up and running")
})

http.listen(PORT, () => {
    console.log(`Listening to ${PORT}`);
})

