const { MongoClient } = require('mongodb');

const MONGO_DB_URL = process.env.MONGO_DB_URL;
const DB_NAME = process.env.DB_NAME;

const connection = () => MongoClient
  .connect(MONGO_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((conn) => conn.db(DB_NAME))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

module.exports = connection;
