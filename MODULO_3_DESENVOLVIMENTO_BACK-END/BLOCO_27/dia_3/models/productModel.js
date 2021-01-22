const connection = require('./connection');

const getAllProducts = async () => connection.query('SELECT * FROM products');

const getProductById = async (id) =>
  connection.query('SELECT * FROM products WHERE id = ?', [id]);

const addProduct = async (name, brand) => connection.query(
  `INSERT INTO products (name, brand) VALUES (?, ?);`,
  [name, brand]
);

const updateProduct = async (id, name, brand) => connection.query(
  'UPDATE products SET name = ?, brand = ? WHERE id = ?',
  [name, brand, id],
);

const deleteProduct = async (id) => connection.query(
  'DELETE FROM products WHERE id = ?',
  [id],
);

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};
