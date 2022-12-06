const express = require('express');
const router = express.Router();
const mainControllers = require ("../controllers/mainControllers")
const upload = require('../middlewares/multer')


router.get('/', mainControllers.index)

router.get('/register', mainControllers.register)

router.get('/product/:id', mainControllers.productDetail);

router.get('/product-admin/:id', mainControllers.edit);
router.put('/product-admin/:id', upload.single("images"), mainControllers.update);


router.get('/carrito', mainControllers.carrito);

router.get('/tienda', mainControllers.tienda);

router.get('/login', mainControllers.login);

// /*** CREATE ONE PRODUCT ***/ 
router.get('/charge-product', mainControllers.chargeProduct); 
router.post('/charge-product', upload.any(""), mainControllers.store); 



module.exports = router