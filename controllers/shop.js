

const Product = require('../models/product');

exports.getProducts = (req, res, next) => {

    Product.fetchAll(products => {
        res.render('shop/product-list', {
            prods: products, 
            hasProducts: products.length > 0, 
            docTitle: 'Alle Produkte', 
            path: '/products', 
            pageTitle: 'Alle Produkte',
            activeShop: true,
            activeAddProduct: false 
          });
        });
  };


// Get Card
exports.getCard = (req, res, next) => {

  res.render('shop/cart', {
      pageTitle: 'Cart',
      path: '/cart'
  });

};



// Get Checkout
exports.getCheckout = (req, res, next) => {

  res.render('shop/checkout', {
      pageTitle: 'Checkout',
      path: '/checkout'
  });

};

// GET INDEX
exports.getIndex = (req, res, render) => {

  res.render('shop/index', {
    pageTitle: 'Index',
    path: '/'
  });
  
};