const fs = require('fs').promises;
const express = require('express');
const router = express.Router();

const readSimpsonsFile = async () => {
  const file = await fs.readFile('simpsons.json');
  const stringData = file.toString('utf8');
  const jsonData = JSON.parse(stringData);

  return jsonData;
};

const writeSimpsonFile = async (data) => {
  const dataToSave = JSON.stringify(data);
  try {
    await fs.writeFile('simpsons.json', dataToSave);
  } catch (err) {
    if (err) throw err;
  }
};

const verifyId = (data, id) => data.some(char => char.id === id);

router.get('/', async (req, res) => {
  const data = await readSimpsonsFile();

  res.status(200).send({ data });
});

router.get('/:id', async (req, res) => {
  const data = await readSimpsonsFile();

  const { id } = req.params;
  const character = data.find(char => char.id === id);

  res.status(200).send({ personagem: character || [] });
});

router.post('/', async (req, res) => {
  const { id, name } = req.body;
  if (!id || !name)
    res.status(400).send('Você precisa informar todos os dados!');

  const data = await readSimpsonsFile();
  const alreadyExists = verifyId(data, id);

  if (alreadyExists)
    return res.status(400).send('O id informado já existe no banco do dados!');

  const newData = [...data, { id, name }];

  await writeSimpsonFile(newData);

  res.status(200).send({ success: 'Character created successfully!' });
});

module.exports = router;
