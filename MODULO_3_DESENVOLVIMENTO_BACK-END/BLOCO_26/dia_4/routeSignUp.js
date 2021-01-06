const express = require('express');
const generateToken = require('./generateToken');

const router = express.Router();

router.post('/', (req, res) => {
  const { email, password, firstName, phone } = req.body;

  if (!email || !password || !firstName || !phone)
    return res.status(401).send({ message: 'Token inválido!' });

  const token = generateToken();

  res.status(200).send({ token });
});

module.exports = router;
