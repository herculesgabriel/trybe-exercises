const ProductController = require('./productController');
const ProductModel = require('../models/productModel');

describe('ProductController', () => {
  it('should return all products', () => {
    const req = {};
    const res = { status: jest.fn(), json: jest.fn() };
    const allProducts = [{ id: 1, name: "Cerveja Skol", brand: "Ambev" }];

    ProductModel.getAll = jest.fn().mockReturnValue(allProducts);

    ProductController.getAllProducts(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(allProducts);
  });

  it('should return product by id', () => {
    const req = { params: { id: 2 } };
    const res = { status: jest.fn(), json: jest.fn() };
    const product = { id: 2, name: "Monitor AGON", brand: "AOC" };

    ProductModel.getById = jest.fn().mockReturnValue(product);

    ProductController.getProductById(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(product);
  });

  it('should return 404 when no product is found', () => {
    const req = { params: { id: 1 } };
    const res = { status: jest.fn(), send: jest.fn() };

    ProductModel.getById = jest.fn().mockReturnValue(null);

    ProductController.getProductById(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith({ message: 'Produto não encontrado' });
  });

  it('should create a new product successfully', () => {
    const product = { id: 4, name: "Google Home Mini", brand: "Google" };
    const req = { body: { name: product.name, brand: product.brand } };
    const res = { status: jest.fn(), send: jest.fn(), json: jest.fn() };

    ProductModel.add = jest.fn().mockReturnValue(product);

    ProductController.createProduct(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(product);
  });

  it('should return error message when an error is thrown', () => {
    const req = { body: { name: "Google Home Mini", brand: "Google" } };
    const res = { status: jest.fn(), send: jest.fn() };

    ProductModel.add = jest.fn().mockImplementation(() => {
      throw new Error();
    });

    ProductController.createProduct(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith({ message: 'Algo deu errado' });
  });

  it('should return all products but deleted product when deleting a product', () => {
    const remainingProducts = [
      { id: 1, name: "Cerveja Skol", brand: "Ambev" },
      { id: 3, name: "MacBook Air", brand: "Apple" },
    ];
    const req = { params: { id: 2 } };
    const res = { status: jest.fn(), json: jest.fn() };

    ProductModel.remove = jest.fn().mockReturnValue(remainingProducts);

    ProductController.deleteProductById(req, res);

    expect(ProductModel.remove).toHaveBeenCalledWith(2);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(remainingProducts);
  });

  it('should return all products with the updated one when updating a product', () => {
    const allProducts = [
      { id: 1, name: 'Cerveja Skol', brand: 'Ambev' },
      { id: 2, name: 'MacBook Aire', brand: 'Apply' },
    ];
    const req = { params: { id: 2 }, body: { name: 'MacBook Air', brand: 'Apple' } };
    const res = { status: jest.fn(), json: jest.fn() };

    ProductModel.addOrUpdate = jest.fn().mockReturnValue(allProducts);

    ProductController.editProductById(req, res);

    expect(ProductModel.addOrUpdate).toHaveBeenCalledWith(2, 'MacBook Air', 'Apple');
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(allProducts);
  });
});
