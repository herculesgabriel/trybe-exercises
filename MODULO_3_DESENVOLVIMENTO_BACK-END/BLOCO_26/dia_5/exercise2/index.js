const express = require('express');
const axios = require('axios').default;

const app = express();

app.use(express.json());

app.get('/btc/price', (req, res) => {
  const { authorization: token } = req.headers;

  const tokenPattern = /^[\w\d]{12}$/;
  console.log(tokenPattern.test(token));

  if (token && !tokenPattern.test(token))
    return res.status(401).send('invalid token');

  axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json')
    .then(response => res.status(200).send(response.data))
    .catch(err => res.status(401).send(`Error: ${err}`));
});

app.listen(3000, () => 'Server started at port 3000');
