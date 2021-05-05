const express = require('express');

const { Addresses, Employees, Books, Users } = require('./models');

const app = express();

app.get('/employees', (_req, res) => Employees
  .findAll({ include: { model: Addresses, as: 'addresses' } })
  .then((answer) => res.status(200).json(answer))
  .catch(() => res.status(500).json({ message: 'Algo deu errado' })));

app.get('/employees/:id', (req, res) => Employees
  .findAll({
    where: { employee_id: req.params.id },
    include: [{ model: Addresses, as: 'addresses', attributes: { exclude: ['number'] } }],
  })
  .then((employee) => {
    if (!employee.length) {
      return res.status(404).send({ message: 'Funcionário não encontrado' });
    }
    return res.status(200).json(employee);
  })
  .catch(() => res.status(500).json({ message: 'Algo deu errado' })));

app.get('/usersbooks/:id', (req, res) => Users
  .findAll({
    where: { user_id: req.params.id },
    include: [{ model: Books, as: 'books', through: { attributes: [] } }],
  })
  .then((usersbooks) => {
    if (!usersbooks.length) {
      return res.status(404).send({ message: 'Usuário não encontrado' });
    }
    return res.status(200).json(usersbooks);
  })
  .catch(() => res.status(500).json({ message: 'Algo deu errado' })));

app.post('/employees', async (req, res) => {
  // Primeiro iniciamos a transação
  const t = await sequelize.transaction();

  try {
    const { firstName, lastName, age, city, street, number } = req.body;

    // Depois executamos as operações
    const employee = Employee.create(
      { firstName, lastName, age },
      { transaction: t }
    );

    const address = Address.create(
      { city, street, number, employee_id: employee.id },
      { transaction: t }
    );

    // Se chegou até essa linha, quer dizer que nenhum erro ocorreu.
    // Com isso, podemos finalizar a transação usando a função `commit`.
    await t.commit();

    res.status(200).json({ message: 'Cadastrado com sucesso' });
  } catch (_e) {
    // Se entrou nesse bloco é porque alguma operação falhou.
    // Nesse caso, o sequelize irá reverter as operações anteriores com a função rollback, não sendo necessário fazer manualmente
    await t.rollback();
    res.status(500).json({ message: 'Algo deu errado' })
  }
});

app.listen(3000, () => console.log('Port 3000'));
