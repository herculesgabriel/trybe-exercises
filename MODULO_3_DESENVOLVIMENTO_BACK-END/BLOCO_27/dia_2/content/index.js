require('dotenv').config();

const express = require('express');
const User = require('./models/User');

const app = express();

app.use(express.json());

app.get('/user', async (req, res) => {
  const users = await User.getAllUsers();
  res.status(200).json(users);
});

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;

  const user = await User.getUser(id);
  if (!user) return res.status(404).json({ message: 'User not found' });

  res.status(200).json(user);
});

app.post('/user', async (req, res) => {
  const { id, first_name, last_name, email, password } = req.body;

  const isValid = User.isValid(id, first_name, last_name, email, password);
  if (!isValid) return res.status(200).send({ message: 'Invalid data' });

  await User.createUser(id, first_name, last_name, email, password);

  res.status(201).json({ message: 'User created successfully' });
});

app.put('/user/:id', async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email, password } = req.body;

  await User.editUser(id, first_name, last_name, email, password);

  res.status(200).json({ message: 'User edited successfully' });
});

app.delete('/user/:id', async (req, res) => {
  const { id } = req.params;

  await User.deleteUser(id);

  res.status(200).json({ message: 'User deleted successfully' });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
