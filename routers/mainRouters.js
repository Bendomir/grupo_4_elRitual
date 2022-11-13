const express = require('express');
const router = express.Router();
const mainControllers = require ("../controllers/mainControllers")


router.get('/', mainControllers.index)

router.get('/register', mainControllers.register)

router.get('/product/:id', mainControllers.productDetail);

router.get('/product-admin/:id', mainControllers.productDetailAdmin);

router.get('/carrito', mainControllers.carrito);

router.get('/tienda', mainControllers.tienda);

router.get('/login', mainControllers.login);




module.exports = router