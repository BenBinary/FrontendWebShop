const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');
const router = express.Router();

// Get-Aufruf des Shops
router.get('/', shopController.getIndex);

// Cart 
router.get('/cart', shopController.getCard);
router.post('/cart', shopController.postCard);


// Delete Items from Card
router.post('/cart-delete-item', shopController.postCartDeleteProduct);

// Oders 
router.get('/orders', shopController.getOrders);

// Products
router.get('/products', shopController.getProducts);

// bestimmte Products
router.get('/products/:productID', shopController.getProduct);


// Checkout
router.get('/checkout', shopController.getCheckout);

module.exports = router;
