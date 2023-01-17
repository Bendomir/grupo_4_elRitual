const path = require('path');
const { body } = require('express-validator');

module.exports = [
	body('firstName').notEmpty().withMessage('Tienes que escribir un nombre'),
	body('lastName').notEmpty().withMessage('Tienes que escribir un apellido'),
	body('email')
		.notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
	body('userName').notEmpty().withMessage('Tienes que escribir un nombre de usuario'),
	body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
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