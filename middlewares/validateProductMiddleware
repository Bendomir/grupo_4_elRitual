const path = require('path');
const { check } = require('express-validator');

module.exports = [
     check("name")
     .notEmpty().withMessage('Tienes que escribir un nombre').bail()
     .isLength({ min: 5 }).withMessage('Tienes que escribir un nombre más largo'),
     check("price").notEmpty().withMessage('Tienes que escribir un precio'),
	 check("quota").notEmpty().withMessage("Tienes que elegir las cuotas"),
     check("images")
     .custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', ".jpeg", '.png', '.gif'];
		
		if (!file) {
			throw new Error ("tienes que subir una imagen")
			
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}
		
		return true })

]