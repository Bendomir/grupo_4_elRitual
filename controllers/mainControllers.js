const path = require('path');
const fs = require('fs');
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



const mainControllers={
    index:(req, res) => {

        res.render("index");
    },
    register: (req, res) => {

        res.render("register");
    },
    productDetail: (req, res) => {
        let product = products.find(product => product.id == req.params.id);
        res.render("productDetail", {product});
    },

    edit: (req, res) => {
		let product = products.find(product => product.id == req.params.id);
        res.render("productDetailAdmin", {product});
	},
	update: (req, res) => {
		let productToEdit = products.find(product => product.id == req.params.id);

         let img
		 if(req.files.length > 0) {
		 	img = req.files[0].filename
		 } else {
		 	img = 'default-image.png'
		 }

		let addProduct = {
			'id': productToEdit.id,
			'name': req.body.name,
			'price': req.body.price,
			'quota': req.body.quota,
			'images': img
			}

		let newProduct = products.map(product => {
			if (addProduct.id == product.id){
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

        res.render("tienda", {products});
    },
    login: (req, res) => {

        res.render("login");   
},
    chargeProduct: (req, res) => {

    res.render("chargeProduct");   
}

}
module.exports = mainControllers



