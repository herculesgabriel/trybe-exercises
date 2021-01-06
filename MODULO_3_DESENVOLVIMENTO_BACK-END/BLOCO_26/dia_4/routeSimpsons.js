const fs = require('fs').promises;
const express = require('express');
const router = express.Router();

const readSimpsonsFile = async () => {
  const file = await fs.readFile('simpsons.json');
  const stringData = file.toString('utf8');
  const jsonData = JSON.parse(stringData);

  return jsonData;
};

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

module.exports = router;
