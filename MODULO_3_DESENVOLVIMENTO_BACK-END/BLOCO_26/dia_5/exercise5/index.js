const express = require('express');

const multiplicationMiddleware = require('./middleware/multiplyMiddleware');
const divideMiddleware = require('./middleware/divideMiddleware');
const addMiddleware = require('./middleware/addMiddleware');
const subtractMiddleware = require('./middleware/subtractMiddleware');

const app = express();

app.get(
  '/:operation/:number1/:number2',
  multiplicationMiddleware,
  divideMiddleware,
  addMiddleware,
  subtractMiddleware,
  (req, res) => {
    res.status(401).send({ message: 'operation not found' });
  }
);

app.listen(3000, () => console.log('Started server at port 3000'));
