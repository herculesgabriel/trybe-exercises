const ProductService = require('../services/productService');

const getAllProducts = async (req, res) => {
  const products = await ProductService.getAllProducts();

  if (products.status === 'error')
    return res.status(500).send({ message: 'Internal error' });

  res.status(200).json(products);
};

const getProductById = async (req, res) => {
  const { id } = req.params;

  const product = await ProductService.getProductById(id);

  if (product.status === 'not found')
    return res.status(400).send({ message: 'No products found' });

  if (product.status === 'error')
    return res.status(500).send({ message: 'Internal error' });

  res.json(product);
};

const addProduct = async (req, res) => {
  const { name, brand } = req.body;

  const createdProduct = await ProductService.addProduct(name, brand);

  if (createdProduct.status === 'invalid data')
    return res.status(500).send({
      message: 'Invalid data. You need to provide either a name and a brand'
    });

  if (createdProduct.status === 'error')
    return res.status(500).send({ message: 'Internal error' });

  res.send(createdProduct);
};

const updateProduct = async (req, res) => {
  const { name, brand } = req.body;
  const { id } = req.params;

  const updatedProduct = await ProductService.updateProduct(id, name, brand);

  if (updatedProduct.status === 'not found')
    return res.status(400).send({ message: 'Product not found' });

  if (updatedProduct.status === 'error')
    return res.status(500).send({ message: 'Internal error' });

  res.send(updatedProduct);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const result = await ProductService.deleteProduct(id);

  if (result.status === 'not found')
    return res.status(400).send({ message: 'Product not found' });

  if (result.status === 'error')
    return res.status(500).send({ message: 'Internal error' });

  res.send({ message: 'Product deleted successfully' });
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  deleteProduct,
  updateProduct,
};
