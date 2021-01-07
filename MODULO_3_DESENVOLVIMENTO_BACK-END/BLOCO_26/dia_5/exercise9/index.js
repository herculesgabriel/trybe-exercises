const express = require('express');

const users = [
  {
    id: 2,
    user: 'marcos',
    isActive: true,
  },
  {
    id: 3,
    user: 'paulo',
    isActive: true,

  },
  {
    id: 3,
    user: 'roger',
    isActive: false,
  },
];

const app = express();

app.use(express.json());

app.put('/user/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (typeof status !== 'boolean')
    return res.status(401).send({ message: 'status isn\'t a boolean' });

  const foundUserIndex = users.findIndex(user => user.id === parseInt(id));

  if (foundUserIndex === -1)
    return res.status(401).send({ message: 'user isn\'t found' });

  users[foundUserIndex].isActive = status;

  res.status(200).send({ message: 'status changed', user: users[foundUserIndex] });
});

app.listen(3000, () => console.log('Started server at port 3000'));
