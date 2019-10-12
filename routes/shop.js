const path = require('path');

const express = require('express');

const productController = require('../controllers/products');
const router = express.Router();

// Get-Aufruf des Shops
router.get('/', productController.getProducts);

module.exports = router;
