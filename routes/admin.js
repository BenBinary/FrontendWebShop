const path = require('path');

const express = require('express');
const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);


// /admin/product => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

router.get('/edit-product/:productId', adminController.getEditProduct);

//Route um Artikel zu aktualisieren
router.post('/edit-product', adminController.postEditProduct);

//Um einen Artikel zu löschen
router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;
