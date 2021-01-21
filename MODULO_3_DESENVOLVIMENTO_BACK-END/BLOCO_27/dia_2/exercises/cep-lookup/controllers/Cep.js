const Cep = require('../services/Cep');

const getCep = async (req, res) => {
  const { cep } = req.query;

  const data = await Cep.getCep(cep);

  if (!data) return res.status(400).json({ message: 'CEP não encontrado' });

  const { uf, cidade } = data;
  await Cep.updateStatistics(uf, cidade);

  res.status(200).json(data);
};

module.exports = {
  getCep,
};
