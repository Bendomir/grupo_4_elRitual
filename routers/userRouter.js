const express = require('express');
const router = express.Router();
const userController = require ("../controllers/userController")
const upload = require('../middlewares/multer')
const userImage = require('../middlewares/userImageUpload')
const { check } = require ("express-validator")


router.get('/register', userController.register)
router.post('/register', userImage.single('userImage'), userController.procesarRegistro)
router.get('/login', userController.login);

// router.post("/login", [
//     check("user").notEmpty().withMessage("Usuario invalido"),
//     check("password").isLength({min:8}).withMessage("La contraseña debe tener al menos 8 caracteres")
// ] ,mainControllers.processLogin)

router.post("/login", userController.loginProcess)


// RUTAS DE USUARIO CON RELACIONES DE PRODUCTO

router.get('/carrito', userController.carrito);






module.exports = router