// install Mongoose, MongoDB, dotenv, and Express from npm +info on setup => npmjs.com

require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const productRoute = require('./routes/productRoute');
const userRoute = require('./routes/userRoute');
const errorMiddleware = require('./middleware/errorMiddleware');
const {getAllProducts, postProducts, getProductById, updateProductById, deleteProductById} = require('./controllers/productController');
const {getAllUsers, postUsers, getUsersById, updateUsersById, deleteUsersById} = require('./controllers/userController'); 
const app = express();

const PORT = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.raw());


// route definition

app.use('/api/products', productRoute);
app.use('/api/users', userRoute);

app.use(errorMiddleware);

/*
first API call

app.get('/', (req, res) => {
    res.status(200)send(`Hello Node API`)
});
*/


// random test route

app.get('/about', (req, res) => {
    res.send(`Hello About! We have installed Nodemon and MongoDB`)
});

// Mongoose Connection Validation

mongoose.connect(MONGO_URL).then(() => {
    app.listen(PORT, ()=> {
        console.log(`Node API app is running on port ${PORT}`)
    });
    console.log(`Connected to MongoDB`);
}).catch((error) => {
    console.log(error)
});
