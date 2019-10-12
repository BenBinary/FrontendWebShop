
const products = [];

exports.getAddProduct = (req, res, next) => {
  
    res.render('add-product', { 
      pageTitle: 'Add Product', 
      path: '/admin/add-product',
      formCSS: true,
      productCSS: true,
      activeAddProduct: true 
    });
  };

exports.postAddProduct =  (req, res, next) => {

    products.push({ title: req.body.title });
    
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {

    res.render('shop', {
      prods: products, 
      hasProducts: products.length > 0, 
      docTitle: 'ShopMop', 
      path: '/', 
      pageTitle: 'Shop',
      activeShop: true,
      activeAddProduct: false 
    });
  
  };

//exports.products = products;