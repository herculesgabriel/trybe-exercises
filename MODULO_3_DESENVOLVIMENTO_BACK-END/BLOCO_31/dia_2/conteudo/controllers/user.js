const express = require('express');

const { User } = require('../models');

const routes = express.Router();

routes.get('/', (req, res, next) => {
  User.findAll()
    .then((users) => res.status(200).json(users))
    .catch((e) => {
      console.error(e.message);
      res.status(500).json({ message: 'Algo deu errado!' });
    });
});

routes.get('/:id', (req, res, next) => {
  User.findByPk(req.params.id)
    .then((user) => {
      if (user === null) {
        return res.status(404).send({ message: 'Usuário não encontrado' });
      }
      return res.status(200).json(user);
    })
    .catch((e) => {
      console.error(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    });

});

routes.post('/', (req, res) => {
  const { fullname, email } = req.body;

  User.create({ fullname, email }).then((user) => res.status(200).json(user))
    .catch((e) => {
      console.error(e.message);
      res.status(500).send({ message: 'Algo deu errado' });
    });
});

routes.put('/:id', (req, res) => {
  const { fullname, email, phone } = req.body;

  User.update(
    { fullname, email, phone },
    {
      where: { id: req.params.id },
    }
  ).then((user) => {
    res.status(200).send({
      message: 'Usuário atualizado com sucesso!',
      user,
    });
  })
    .catch((e) => {
      console.error(e.message);
      res.status(500).send({ message: 'Algo deu errado' });
    });
});

routes.delete('/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((user) => {
      res.status(200).send({
        message: `Usuário excluído com sucesso.`,
        user,
      });
    })
    .catch((e) => {
      console.error(e.message);
      res.status(500).send({ message: 'Algo deu errado' });
    });
});

module.exports = routes;
