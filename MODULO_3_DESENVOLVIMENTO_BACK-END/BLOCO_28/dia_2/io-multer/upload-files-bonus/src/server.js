const express = require('express');

const routes = require('./routes');
const error = require('./middlewares/error');

const server = express();

server.use(express.json());

server.use('/uploads', express.static('src/uploads'));

server.use(routes);

server.use(error);

server.listen(3333, () => console.log('Server started at port 3333'));
