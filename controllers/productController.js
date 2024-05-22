const Product = require('../models/productModel');

const getAllProducts = async(req, res) => {    
    try{
        const products = await Product.find({});
        res.status(200).json(products);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message});        
    }
};

const getProductById = async(req, res) => {    
    try{
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message});        
    }
};

const postProducts =  async(req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
};

const updateProductById = async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product){
            return res.status(404).json({message: `product with ID ${id} not found`});
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error){
        console.log(error.message);
        res.status(500).json({message:error.message});
    }
};

const deleteProductById = async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product) {
            return res.status(404).json({message: `unable to find product id ${id}`});
        }
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({message:error.message});
    }
};

module.exports = {
    getAllProducts,
    getProductById,
    postProducts,
    updateProductById,
    deleteProductById
}