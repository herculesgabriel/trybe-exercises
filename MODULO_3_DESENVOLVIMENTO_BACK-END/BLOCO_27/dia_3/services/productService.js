const ProductModel = require('../models/productModel');

const getAllProducts = async () => {
  try {
    const [products] = await ProductModel.getAllProducts();
    return products;
  } catch (err) {
    console.error(err);
    return { status: 'error' };
  }
};

const getProductById = async (id) => {
  try {
    const [result] = await ProductModel.getProductById(id);

    if (!result.length) return { status: 'not found' };

    return result[0];
  } catch (err) {
    console.error(err);
    return { status: 'error' };
  }
};

const addProduct = async (name, brand) => {
  if (!name || typeof name !== 'string')
    return { status: 'invalid data' };

  if (!brand || typeof brand !== 'string')
    return { status: 'invalid data' };

  try {
    const [createdProduct] = await ProductModel.addProduct(name, brand);

    return {
      id: createdProduct.insertId,
      name,
      brand,
    };
  } catch (err) {
    console.error(err);
    return { status: 'error' };
  }
};

const updateProduct = async (id, name, brand) => {
  try {
    const [productToUpdate] = await ProductModel.getProductById(id);

    if (!productToUpdate.length)
      return { status: 'not found' };

    await ProductModel.updateProduct(id, name, brand);

    const [updatedProduct] = await ProductModel.getProductById(id);

    return updatedProduct;
  } catch (err) {
    console.error(err);
    return { status: 'error' };
  }
};

const deleteProduct = async (id) => {
  try {
    const [productToDelete] = await ProductModel.getProductById(id);

    if (!productToDelete.length)
      return { status: 'not found' };

    await ProductModel.deleteProduct(id);

    return { status: 'success' };
  } catch (err) {
    console.error(err);
    return { status: 'error' };
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};
