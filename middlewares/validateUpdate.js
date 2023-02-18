const path = require('path');
const { check } = require('express-validator');

module.exports = [
     check("name")
     .notEmpty().withMessage('Tienes que escribir un nombre').bail()
     .isLength({ min: 5 }).withMessage('Tienes que escribir un nombre más largo'),
     check("image")
     .custom((value, { req }) => {
          if (!req.file) {
               return true; // permitir la actualización sin imagen si no se proporciona ninguna
          }
          let file = req.file;
          let acceptedExtensions = ['.jpg', ".jpeg", '.png', '.gif'];
          let fileExtension = path.extname(file.originalname);
          if (!acceptedExtensions.includes(fileExtension)) {
               throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
          }
          return true;
     })
]