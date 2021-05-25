const fs = require('fs');
const ProductModel = require('./productModel');

const productsDatabase = [
  { id: 1, name: "Cerveja Skol", brand: "Ambev" },
  { id: 2, name: "Monitor AGON", brand: "AOC" },
  { id: 3, name: "MacBook Air", brand: "Apple" },
];

describe('ProductModel', () => {
  it('return all products', () => {
    const products = ProductModel.getAll();

    expect(products).toStrictEqual(expect.arrayContaining(productsDatabase));
  });
});