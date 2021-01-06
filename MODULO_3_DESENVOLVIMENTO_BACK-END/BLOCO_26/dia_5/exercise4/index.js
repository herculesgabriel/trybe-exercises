const express = require('express');

const users = [
  {
    id: 2,
    user: 'antonio',
    comments: ["Hoje o dia está maneiro!", "Agora não está muito"],
  },
  {
    id: 3,
    user: "rodrigo",
    comments: ["To aqui também", "Agora não tô"],
  }
];

const app = express();

app.get('/user/:name', (req, res) => {
  const { name } = req.params;

  const foundUser = users.find(({ user }) => user === name);

  if (foundUser) return res.status(200).json(foundUser.comments);

  res.status(401).send({ message: 'user not found' });
});

app.listen(3000, () => console.log('Started server at port 3000'));
