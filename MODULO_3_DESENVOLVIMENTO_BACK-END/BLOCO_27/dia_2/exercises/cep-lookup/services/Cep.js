const axios = require('axios').default;
const Cep = require('../models/Cep');

const formatCep = (cep) => {
  const findHyphen = /[-]/g;
  return cep.replace(findHyphen, '');
};

const validateCep = (cep) => {
  const findLetters = /[a-zA-Z]/;
  return !findLetters.test(cep);
};

const fetchCepApi = (cep) => axios.get(`http://cep.la/${cep}`, {
  headers: { 'Accept': 'application/json' }
}).then(response => response.data);

const getCep = async (cep) => {
  const isValid = validateCep(cep);

  if (!isValid) return null;

  const cepWithNoHyphen = formatCep(cep);

  const databaseData = await Cep.getCep(cepWithNoHyphen);

  if (databaseData) return databaseData;

  const fetchData = await fetchCepApi(cepWithNoHyphen);

  if (!fetchData) return null;

  await Cep.saveCep(fetchData);

  return fetchData;
};

const updateStatistics = async (uf, cidade) => {
  await Cep.updateUfStatistics(uf);
  await Cep.updateCidadeStatistics(cidade);
};

module.exports = {
  getCep,
  updateStatistics,
};
