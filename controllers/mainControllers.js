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
        let product = products[(req.params.id)-1]
        res.render("productDetail", {product});
    },

    productDetailAdmin: (req, res) => {
        let product = products[(req.params.id)-1]
        res.render("productDetailAdmin", {product});
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



