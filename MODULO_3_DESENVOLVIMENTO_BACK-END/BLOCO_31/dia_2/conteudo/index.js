const express = require('express');

const routes = require('./controllers/user');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log('App running at port 3333'));
