const connection = require('./connection');

const getCep = (cep) => connection()
  .then(db => db.collection('ceps').findOne({ cep }));

const saveCep = ({ cep, uf, cidade, bairro, logradouro }) => connection()
  .then(db => db.collection('ceps').insertOne({
    cep, uf, cidade, bairro, logradouro
  }))
  .then(result => result);

const updateUfStatistics = (uf) => connection()
.then(db => db.collection('statistics').updateMany(
  { uf: uf },
  {
    $set: {
      uf: uf,
    },
    $inc: { quantidade: 1 }
  },
  { upsert: true },
));

const updateCidadeStatistics = (cidade) => connection()
  .then(db => db.collection('statistics').updateMany(
    { cidade: cidade },
    {
      $set: {
        cidade: cidade,
      },
      $inc: { quantidade: 1 }
    },
    { upsert: true },
  ));

module.exports = {
  getCep,
  saveCep,
  updateUfStatistics,
  updateCidadeStatistics,
};
