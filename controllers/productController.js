const path = require('path');
const fs = require('fs');
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const userFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(userFilePath, 'utf-8'));


const productController = {

    tienda: (req, res) => {

		res.render("tienda", { products });
	},

    productDetail: (req, res) => {
        let product = products.find(product => product.id == req.params.id);
        res.render("productDetail", {product});
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
        res.redirect("/products")
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
