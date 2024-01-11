const express = require('express');
const { userSignup, userLogin } = require('../controller/userController');
const { getProducts, getProductById } = require('../controller/productController');
const { addPaymentGateway, paymentVerification } = require('../controller/paymentController');

const route = express.Router();

route.post('/signup', userSignup);
route.post('/login', userLogin);

route.get('/products', getProducts);
route.get('/product/:id', getProductById);

route.post('/payment', addPaymentGateway);
route.post('/paymentverification', paymentVerification);

module.exports = route;