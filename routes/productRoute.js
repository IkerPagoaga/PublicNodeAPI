const express = require('express');
const Product = require('../models/productModel');
const router = express.Router();
const {getAllProducts, postProducts, getProductById, updateProductById, deleteProductById} = require('../controllers/productController');
// routes
/*
router.get('/', (req, res) => {
    res.send(`Hello Node API`)
});

// install Mongoose, MongoDB, and Express from npmjs.com

// random test route

router.get('/about', (req, res) => {
    res.send(`Hello About! We have installed Nodemon and MongoDB`)
});

*/

// get all products

router.get('/', getAllProducts);

// DB call by ID

router.get('/:id', getProductById);

// create new product

router.post('/', postProducts);



// update product
router.put('/:id', updateProductById);

// delete product

router.delete('/:id', deleteProductById);

module.exports = router;