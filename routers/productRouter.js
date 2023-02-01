const express = require('express');
const router = express.Router();
const productController = require ('../controllers/productController')
const userLoggedMiddleware = require('../middlewares/userLoggedMiddleware');


const upload = require('../middlewares/multer')
const { check } = require ("express-validator")

router.get('/', userLoggedMiddleware, productController.tienda);
router.post('/', userLoggedMiddleware, productController.search);

router.get('/charge-product', userLoggedMiddleware, productController.chargeProduct);
router.post('/charge-product', upload.any(""), productController.store); 

router.get('/:id', userLoggedMiddleware, productController.productDetail);
router.delete('/:id', productController.destroy);

router.get('/product-admin/:id', userLoggedMiddleware, productController.edit);
router.put('/product-admin/:id', upload.single("images"), productController.update);


module.exports = router