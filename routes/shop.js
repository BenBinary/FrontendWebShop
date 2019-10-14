const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');
const router = express.Router();

// Get-Aufruf des Shops
router.get('/', shopController.getIndex);

// Cart 
router.get('/cart', shopController.getCard);

// Products
router.get('/products', shopController.getProducts);

// Checkout
router.get('/checkout', shopController.getCheckout);

module.exports = router;
