const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const adminData = require('./admin');

const router = express.Router();


// Get-Aufruf des Shops
router.get('/', (req, res, next) => {

  console.log(adminData.products);
  const products = adminData.products;
  res.render('shop', {
    prods: products, 
    hasProducts: products.length > 0, 
    docTitle: 'ShopMop', 
    path: '/', 
    pageTitle: 'Shop',
    activeShop: true,
    activeAddProduct: false 
  });

});

module.exports = router;
