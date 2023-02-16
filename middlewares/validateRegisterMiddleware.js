const path = require('path');
const { body } = require('express-validator');

module.exports = [
	body('firstName').notEmpty().withMessage('Tienes que escribir un nombre').bail()
	.isLength({ min: 2 }).withMessage('Tienes que escribir un nombre más largo'),
	body('lastName').notEmpty().withMessage('Tienes que escribir un apellido').bail()
	.isLength({ min: 2 }).withMessage('Tienes que escribir un apellido más largo'),
	body('email')
		.notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
	body('userName').notEmpty().withMessage('Tienes que escribir un nombre de usuario').bail()
	.isLength({ min: 8 }).withMessage('Tienes que escribir un nombre de usuario más largo'),
	body('password').notEmpty().withMessage('Tienes que escribir una contraseña').bail()
	.isLength({ min: 8 }).withMessage('Tienes que escribir una contraseña más larga'),
	body('userImage').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif'];

		if (file) {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	})
]