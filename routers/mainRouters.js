const express = require('express');
const router = express.Router();
const mainControllers = require ("../controllers/mainControllers")
const upload = require('../middlewares/multer')
const { check } = require ("express-validator")

router.get('/', mainControllers.index)

router.get('/register', mainControllers.register)

router.get('/product/:id', mainControllers.productDetail);
router.delete('/product/:id', mainControllers.destroy);

router.get('/product-admin/:id', mainControllers.edit);
router.put('/product-admin/:id', upload.single("images"), mainControllers.update);


router.get('/carrito', mainControllers.carrito);

router.get('/tienda', mainControllers.tienda);

router.get('/login', mainControllers.login);
router.post("/login", [
    check("user").notEmpty().withMessage("Usuario invalido"),
    check("password").isLength({min:8}).withMessage("La contraseña debe tener al menos 8 caracteres")
] ,mainControllers.processLogin)
router.post("/login", mainControllers.loginProcess)
// /*** CREATE ONE PRODUCT ***/ 
router.get('/charge-product', mainControllers.chargeProduct); 
router.post('/charge-product', upload.any(""), mainControllers.store); 



module.exports = router