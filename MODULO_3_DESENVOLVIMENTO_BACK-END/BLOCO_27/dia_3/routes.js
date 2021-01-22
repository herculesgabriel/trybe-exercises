const express = require('express');

const ProductController = require('./controllers/productController');

const router = express.Router();

router.get('/products', ProductController.getAllProducts);

router.get('/products/:id', ProductController.getProductById);

router.post('/products', ProductController.addProduct);

router.put('/products/:id', ProductController.updateProduct);

router.delete('/products/:id', ProductController.deleteProduct);

module.exports = router;
