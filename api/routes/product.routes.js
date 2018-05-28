module.exports = (app) => {
    const product = require('../controllers/product.controller.js');

    // Create a new product
    app.post('/products', product.create);

    // Retrieve all products
    app.get('/products', product.findAll);

    // Retrieve a single product with productId
    app.get('/products/:productId', product.findOne);

    // Update a product with productId
    app.put('/products/:productId', product.update);

    // Delete a product with productId
    app.delete('/products/:productId', product.delete);
}