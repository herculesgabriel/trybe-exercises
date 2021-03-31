const express = require('express');

const routes = require('./routes');

const app = express();

app.use(express.json());

app.use('/uploads', express.static('uploads'));

app.use(routes);

module.exports = app;
