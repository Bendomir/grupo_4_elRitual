const express = require('express');
const router = express.Router();
const userController = require ("../controllers/userController")
const upload = require('../middlewares/multer')
const userImage = require('../middlewares/userImageUpload')
const { check } = require ("express-validator");
const guestMiddleware = require('../middlewares/guestMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const userLoggedMiddleware = require('../middlewares/userLoggedMiddleware');



router.get('/register',guestMiddleware, userController.register)
router.post('/register', userImage.single('userImage'), validations, userController.procesarRegistro)

router.get('/login',guestMiddleware, userController.login);
router.post("/login", userController.loginProcess)

router.get('/profile/', authMiddleware, userController.profile);
router.get('/profile/edit', authMiddleware, userController.editProfile)
router.post('/profile/edit', userImage.single('userImage'), userController.storeEditProfile)

router.get('/logout/', userController.logout);




// RUTAS DE USUARIO CON RELACIONES DE PRODUCTO

router.get('/carrito', userLoggedMiddleware, userController.carrito);




module.exports = router


// router.post("/login", [
//     check("user").notEmpty().withMessage("Usuario invalido"),
//     check("password").isLength({min:8}).withMessage("La contraseña debe tener al menos 8 caracteres")
// ] ,mainControllers.processLogin)