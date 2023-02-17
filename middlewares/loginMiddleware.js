const path = require('path');
const { check } = require('express-validator');

module.exports = [
     check("userName")
     .notEmpty().withMessage('Tienes que escribir un nombre').bail()
     .isLength({ min: 5 }).withMessage('El nombre de usuario debe contener al menos 5 caracteres'),
     check("password")
     .notEmpty().withMessage('Ingrese contraseña')
]