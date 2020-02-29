
const Product = require('../models/product');


exports.getAddProduct = (req, res, next) => {
  
    res.render('admin/edit-product', { 
      pageTitle: 'Add Product', 
      path: '/admin/add-product',
      editing: false
    });
  };

exports.postAddProduct =  (req, res, next) => {

    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const price = req.body.price;
    const product = new Product(null, title, imageUrl, description, price);

    product.save();
    
    res.redirect('/');
};


exports.getEditProduct = (req, res, next) => {
  
  // Definieren des Edit-MOdus
  const editMode = (req.query.edit == 'true');



  //Falls man sich nicht im Edit Modus befindet
  if (!editMode) {
    return res.redirect('/');
  }

  // Auslesen der Produkt ID
  const prodID = req.params.productId;

  // Callback zur Übergabe des Produkts
  Product.findById(prodID, product => {

    // Falls kein Produkt gefunden wurde, wird die Startseit übergeben
    
    if (!product) {
      return res.redirect('/');
    } 

    console.log('Produkt: ' + product.price);

    // Wenn das Produkt gefunden wurde
    res.render('admin/edit-product', { 
      pageTitle: 'Add Product', 
      path: '/admin/edit-product',
      editing: editMode,
      product: product
    });

  });


};

// Um ein Produkt upzudaten
exports.postEditProduct = (req, res, next) => {


  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;

  // Erzeugen eines neuen OBjekts
  const updatedProduct = new Product(
    prodId,
    updatedTitle,
    updatedImageUrl,
    updatedDesc,
    updatedPrice
  );

  // Speichern des aktualisierten Produkts
  updatedProduct.save();

  res.redirect("/admin/products");

};

exports.getProducts = (req, res, next) => {

    Product.fetchAll(products => {
        res.render('admin/products', {
            prods: products,
            path: '/admin/products', 
            pageTitle: 'Admin Products',
            activeShop: true,
            activeAddProduct: false 
          });
        });

};


exports.postDeleteProduct = (req, res, next) => {


  const prodId = req.body.productId;

  

};