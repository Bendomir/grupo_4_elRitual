const express = require('express');
const router = express.Router();
const mainControllers = require ("../controllers/mainControllers")
const upload = require('../middlewares/multer')


router.get('/', mainControllers.index)

router.get('/register', mainControllers.register)

router.get('/product/:id', mainControllers.productDetail);

router.get('/product-admin/:id', mainControllers.edit);
router.post('/product-admin/:id', upload.any(), mainControllers.update);


router.get('/carrito', mainControllers.carrito);

router.get('/tienda', mainControllers.tienda);

router.get('/login', mainControllers.login);

router.get('/charge-product', mainControllers.chargeProduct)



module.exports = router