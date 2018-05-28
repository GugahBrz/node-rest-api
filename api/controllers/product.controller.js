const mongoose = require('mongoose');
const Product = require('../models/product.model.js');

// Create and Save a new Product
exports.create = (req, res) => {
    
    // Validate request
    if(!req.body.name || !req.body.price) {
        return res.status(400).send({
            message: "Product can't be empty."
        });
    }

    // Create a Product
    const product = new Product({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name, 
        price: req.body.price
    });

    // Save Product in the database
    product.save().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
};

// Retrieve and return all products from the database.
exports.findAll = (req, res) => {
    
    Product.find().then(products => {
        res.send(products);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving products."
        });
    });
};

// Find a single product with a productId
exports.findOne = (req, res) => {

    Product.findById(req.params.productId).then(product => {
        if(!product) {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            });            
        }
        res.send(product);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving product with id " + req.params.productId
        });
    });
};

// Update a product identified by the productId in the request
exports.update = (req, res) => {
    
    // Validate request
    if(!req.body.name || !req.body.price) {
        return res.status(400).send({
            message: "Product can't be empty."
        });
    }

    // Find note and update it with the request body
    Product.findByIdAndUpdate(req.params.productId, {
        name: req.body.name,
        price: req.body.price
    }, {new: true}).then(product => {
        if(!product) {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            });            
        }
        res.send(product);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            });                
        }
        return res.status(500).send({
            message: "Error updating product with id " + req.params.productId
        });
    });
};

// Delete a product with the specified productId in the request
exports.delete = (req, res) => {

    Product.findByIdAndRemove(req.params.productId).then(note => {
        if(!product) {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            });
        }
        res.send({message: "Product deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            });                
        }
        return res.status(500).send({
            message: "Could not delete product with id " + req.params.productId
        });
    });
};