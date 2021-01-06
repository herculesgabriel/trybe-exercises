const express = require('express');
const routeSimpsons = require('./routeSimpsons');
const auth = require('./auth');

const app = express();

app.use(express.json());

app.use('/simpsons', auth, routeSimpsons);

app.get('*', (req, res) => res.status(404).send('Not found'));

app.use((err, req, res, next) => res.status(500).send(`Erro: ${err.message}`));

app.listen(3000, () => console.log('Server started at port 3000'));
