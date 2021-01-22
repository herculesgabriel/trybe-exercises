const mysql = require('mysql2/promise');

const DB_NAME = process.env.DB_NAME;
console.log(typeof DB_NAME);
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_USER = process.env.DB_USER;

const connection = mysql.createPool({
  host: 'localhost', // Se necessário, substitua pelo seu host, `localhost` é o comum
  user: DB_USER, // Se necessário, substitua pelo seu usuário para conectar ao banco na sua máquina
  password: DB_PASSWORD, // Se necessário, substitua pela sua senha para conectar ao banco na sua máquina
  database: DB_NAME,
});

module.exports = connection;
