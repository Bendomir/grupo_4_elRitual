const express = require('express');
const router = express.Router();
const mainController = require ("../controllers/mainController")
const userLoggedMiddleware = require('../middlewares/userLoggedMiddleware');
const apiUserController = require('../controllers/api/apiUserController');
const apiProductController = require('../controllers/api/apiProductController');




router.get('/', userLoggedMiddleware, mainController.index)

router.get('/api/users', apiUserController.list)
router.get('/api/users/:id', apiUserController.detail)
router.get('/api/products', apiProductController.list)
router.get('/api/products/:id', apiProductController.detail)




module.exports = router