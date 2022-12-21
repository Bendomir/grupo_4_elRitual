const path = require('path');
const fs = require('fs');
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const userFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));
const { validationResult } = require('express-validator')
const User = require("../models/User")
const bcrypt = require('bcrypt')


const mainControllers = {
	index: (req, res) => {

		res.render("index");
	},
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
			res.redirect('/tienda')
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
		res.redirect('/tienda')*/

	},
	productDetail: (req, res) => {
		let product = products.find(product => product.id == req.params.id);
		res.render("productDetail", { product });
	},

	destroy: (req, res) => {
		let id = req.params.id
		let productToDelete = products.filter(product => product.id != id);

		fs.writeFileSync(productsFilePath, JSON.stringify(productToDelete, null, '\t'));
		res.redirect('/');

	},

	edit: (req, res) => {
		let product = products.find(product => product.id == req.params.id);
		res.render("productDetailAdmin", { product });
	},
	update: (req, res) => {
		let productToEdit = products.find(product => product.id == req.params.id);

		let img
		console.log(req)
		console.log('validacion', req.file)
		if (req.file) {
			img = req.file.filename

		} else {
			img = productToEdit.images
		}

		let addProduct = {
			'id': productToEdit.id,
			'name': req.body.name,
			'price': req.body.price,
			'quota': req.body.quota,
			'images': img
		}

		let newProduct = products.map(product => {
			if (addProduct.id == product.id) {
				return product = addProduct
			} return product
		})

		fs.writeFileSync(productsFilePath, JSON.stringify(newProduct, null, '\t'));

		res.redirect('/')

	},

	carrito: (req, res) => {

		res.render("carrito");
	},
	tienda: (req, res) => {

		res.render("tienda", { products });
	},
	login: (req, res) => {

		res.render("login");
	},
	processLogin: function (req, res) {
		let errors = validationResult(req);

		if (errors.isEmpty()) {
			let usersJSON = fs.readFileSync("users.json", { encoding: "utf-8" })
			let users;
			if (usersJSON == "") {
				users = [];
			} else {
				users = JSON.parse(usersJSON)
			}


			for (let i = 0; i < users.length; i++) {
				if (users[i].email == req.body.email) {
					if (bcrypt.compareSync(req.body.password, users[i].password)) {
						let usuarioALogearse = users[i];
						break;
					}
				}
			}
			if (usuarioALogearse == undefined) {
				return res.render("login", {
					errors: [
						{ msg: "Credenciales invalidas" }
					]
				})
			}

			req.session.usuarioALogearse = usuarioALogearse;
			res.render("sucess")
		} else {
			return res.render("login", { errors: errors.mapped(), old: req.body })
		}

	},
	loginProcess: function (req, res) {
		let userToLogin = User.findByField("user", req.body.user);
		if (userToLogin) {
			let isOkThePassword = bcyptjs.compareSync(req.body.password, userToLogin.password)
			if (userToLogin.password === req.body.password) {
				return res.send("ok puedes ingresar")
			}
		}
		return res.render("userLoginForm", {
			errors: {
				user: {
					msg: "El usuario no se encuentra registrado"
				}
			}
		})
	},

	chargeProduct: (req, res) => {

		res.render("chargeProduct");
	},
	store: (req, res) => {
		let img
		if (req.files.length > 0) {
			img = req.files[0].filename
		} else {
			img = "default-image.png"
		}
		let newProduct = {
			"id": products[products.length - 1]["id"] + 1,
			...req.body,
			"images": img
		}
		products.push(newProduct)
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, "\t"))
		res.redirect("/tienda")
	}

}
module.exports = mainControllers



