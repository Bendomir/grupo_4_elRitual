const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const { Op } = require("sequelize");
const {  validationResult } = require ("express-validator")

const productController = {

    tienda: (req, res) => {
        db.Products.findAll()
        .then(function(products){
            res.render("tienda", { products:products })
        });
		// console.log(req.body.searchBarStore)
	},

    productDetail: (req, res) => {
        db.Products.findByPk(req.params.id)
        .then(function(product){
            res.render("productDetail", {product:product});
        })		
    },

    destroy: (req, res) => {
        db.Products.destroy({
            where:{
                product_id:req.params.id
            }
        })
        res.redirect('/');

    },

    edit: (req, res) => {
        db.Products.findByPk(req.params.id)
        .then(function(product){
            res.render("productDetailAdmin", { product:product })
        })
    },

    update: (req, res) => {
		let resultValidation = validationResult(req)

		if(resultValidation.errors.length > 0){
		   return res.render("product-admin",{errors:resultValidation.mapped(), oldData:req.body})
		} else{
		   let img = req.file.filename
		   
        db.Products.update({
            name: req.body.name,
            quota: req.body.quota,
            image: img,
            price: req.body.price,
        },{
            where: {
                product_id: req.params.id
            }
        })
	
        res.redirect('/')
	}},

    chargeProduct: (req, res) => {
		res.render("chargeProduct");
    },
    
	store: (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
		  return res.render("chargeProduct", {
			errors: errors.mapped(),
			oldData: req.body,
		  });
		}
	  
		if (!req.file) {
		  return res.render("chargeProduct", {
			errors: { images: { msg: "Debes subir una imagen." } },
			oldData: req.body,
		  });
		}
	  
		const img = req.file.filename
	  
		db.Products.create({
		  name: req.body.name,
		  quota: req.body.quota,
		  image: img,
		  price: req.body.price,
		})
		.then(() => {
		  db.Products.findAll()
		  .then(products => {
			res.redirect("/");
		  })
			.catch(error => {
			  console.log(error);
			  res.render("error", { error });
			});
		  })
		  .catch(error => {
			console.log(error);
			res.render("error", { error });
		  });
		
	  },
	search: (req, res) => {
		
		let probando = db.Products.findAll({
			where: {
				name: {[Op.like]: "%" + req.body.searchBarStore + "%"}					
			}
		})
		.then(function(products){
			res.render("tienda", { products:products })
		})
		
		console.log(probando)
		console.log(req.body.searchBarStore)
	}
}

module.exports = productController


/*store: (req, res) => {
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



		/*productDetail: (req, res) => {
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
	/		'quota': req.body.quota,
			'images': img
		}

		let newProduct = products.map(product => {
			if (addProduct.id == product.id) {
				return product = addProduct
			} return product
		})

		fs.writeFileSync(productsFilePath, JSON.stringify(newProduct, null, '\t'));

		res.redirect('/')

	}*/
