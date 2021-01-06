const express = require('express');
const routeSimpsons = require('./routeSimpsons');
const app = express();

app.use('/simpsons', routeSimpsons);

app.use((err, req, res, next) => {
  res.status(500).send(`Ops! Algo deu errado! ${err.message}`);
});

app.listen(3000, () => console.log('Server started at port 3000'));
