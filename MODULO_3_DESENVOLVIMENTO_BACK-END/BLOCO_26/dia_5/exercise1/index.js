const express = require('express');
const crypto = require('crypto');

const app = express();

app.use(express.json());

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const emailPattern = /[a-zA-Z0-9_-]+@mail\.com$/;
  const isNumberPattern = /^\d{4,8}$/;

  if (!email || !password) return res.status(401).send({ message: 'missing data' });

  if (emailPattern.test(email) && isNumberPattern.test(password)) {
    const token = crypto.randomBytes(6).toString('hex');

    return res.status(200).send({ token });
  }

  res.status(401).send({ message: 'email or password is incorrect.' });
});

app.listen(3000, () => 'Server started at port 3000');
