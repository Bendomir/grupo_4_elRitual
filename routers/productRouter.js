const express = require('express');
const router = express.Router();
const productController = require ('../controllers/productController')
const userLoggedMiddleware = require('../middlewares/userLoggedMiddleware');

const validationsProducts = require('../middlewares/validateProductMiddleware')

const upload = require('../middlewares/multer')
const { check } = require ("express-validator")

router.get('/', userLoggedMiddleware, productController.tienda);

router.get('/charge-product', userLoggedMiddleware, productController.chargeProduct);
router.post('/charge-product', upload.single("images"), validationsProducts, productController.store); 

router.get('/buscador', userLoggedMiddleware, productController.tienda);
router.post('/buscador', userLoggedMiddleware, productController.search);

router.get('/product-admin/:id', userLoggedMiddleware, productController.edit);
router.put('/product-admin/:id', upload.single("images"),validationsProducts, productController.update);

router.get('/:id', userLoggedMiddleware, productController.productDetail);
router.delete('/:id', productController.destroy);



module.exports = router