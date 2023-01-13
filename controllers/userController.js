const path = require('path');
const fs = require('fs');
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const userFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
const { validationResult } = require('express-validator')
const User = require("../models/User")
const bcrypt = require('bcryptjs')

const userController = {

	register: (req, res) => {

		res.render("register");
	},

	procesarRegistro: (req, res) => {
		{
			const resultValidation = validationResult(req);
			if (resultValidation.errors.length > 0) {
				return res.render('register', {
					errors: resultValidation.mapped(),
					oldData: req.body
				})
			}
			User.create(req.body)
			res.redirect('/products')
		}
		/*(req, res) => {
			let password = bcrypt.hashSync(req.body.password, 10)
			let newUser = {
			"id" : User.generateId(),
			"firstName": req.body.firstName,
			"lastName": req.body.lastName,
			"email": req.body.email,
			"userName": req.body.userName,
			"password": password,
		}
		users.push(newUser)
		fs.writeFileSync(userFilePath, JSON.stringify(users,null,"\t"))
		res.redirect('/products')*/

	},

	login: (req, res) => {

		res.render("login");
	},

	loginProcess: function (req, res) {
		let userToLogin = User.findByField("userName", req.body.userName);
		if (userToLogin) {
			let isOkThePassword = bcrypt.compareSync(req.body.password, userToLogin.password)
			if (isOkThePassword) {
				return res.render("index")
			}
			return res.render("login", {
				errors: {
					userName: {
						msg: "Credenciales incorrectas"
					}
				}
			});
		}
		return res.render("login", {
			errors: {
				userName: {
					msg: "El usuario no se encuentra registrado"
				}
			}
		})
	},

	carrito: (req, res) => {

		res.render("carrito");
	}
}

module.exports = userController




// processLogin: function (req, res) {
	// 	let errors = validationResult(req);

	// 	if (errors.isEmpty()) {
	// 		let usersJSON = fs.readFileSync("users.json", { encoding: "utf-8" })
	// 		let users;
	// 		if (usersJSON == "") {
	// 			users = [];
	// 		} else {
	// 			users = JSON.parse(usersJSON)
	// 		}


	// 		for (let i = 0; i < users.length; i++) {
	// 			if (users[i].email == req.body.email) {
	// 				if (bcrypt.compareSync(req.body.password, users[i].password)) {
	// 					let usuarioALogearse = users[i];
	// 					break;
	// 				}
	// 			}
	// 		}
	// 		if (usuarioALogearse == undefined) {
	// 			return res.render("login", {
	// 				errors: [
	// 					{ msg: "Credenciales invalidas" }
	// 				]
	// 			})
	// 		}

	// 		req.session.usuarioALogearse = usuarioALogearse;
	// 		res.render("sucess")
	// 	} else {
	// 		return res.render("login", { errors: errors.mapped(), old: req.body })
	// 	}

	//  },