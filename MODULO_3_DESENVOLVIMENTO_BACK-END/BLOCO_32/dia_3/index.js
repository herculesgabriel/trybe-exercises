const cors = require('cors');
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

app.use(cors());

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log(`🐧 User ${socket.id} connected`);

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  socket.on('message', (message) => {
    io.emit('broadcastMessage', message);
  });

  socket.broadcast.emit('broadcastMessage', `${socket.id} acabou de se conectar`);
});

http.listen(3000, () => {
  console.log('🎉 Server running at port 3000');
});
