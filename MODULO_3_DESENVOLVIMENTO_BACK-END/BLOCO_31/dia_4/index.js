const express = require('express');

const controllers = require('./controllers/productController');
const middlewares = require('./middlewares/middlewares');

const app = express();

app.use(express.json());
app.use(middlewares.log);
app.use(middlewares.checkAuthToken);

app.use(express.json());

app.route('/products')
  .get(controllers.getAllProducts)
  .post(controllers.createProduct);

app.route('/product/:id')
  .get(controllers.getProductById)
  .delete(controllers.deleteProductById)
  .put(controllers.editProductById);

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
