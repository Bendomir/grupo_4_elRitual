const express = require('express');
const router = express.Router();
const mainControllers = require ("../controllers/mainControllers")
const productController = require ('../controllers/productController')

const upload = require('../middlewares/multer')
const { check } = require ("express-validator")

router.get('/:id', productController.productDetail);
router.delete('/:id', productController.destroy);

router.get('/product-admin/:id', productController.edit);
router.put('/product-admin/:id', upload.single("images"), productController.update);

router.get('/charge-product', productController.chargeProduct)
router.post('/charge-product', upload.any(""), productController.store); 

module.exports = router