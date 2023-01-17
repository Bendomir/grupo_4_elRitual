const express = require('express');
const router = express.Router();
const mainController = require ("../controllers/mainController")
const userLoggedMiddleware = require('../middlewares/userLoggedMiddleware');




router.get('/', userLoggedMiddleware, mainController.index)




module.exports = router