const path = require('path');
const mainControllers={
    index:(req, res) => {

        res.render("index");
    },
    register: (req, res) => {

        res.render("register");
    },
    productDetail: (req, res) => {

        res.render("productDetail");
    },
    carrito: (req, res) => {

        res.render("carrito");
    },
    tienda: (req, res) => {

        res.render("tienda");
    },
    login: (req, res) => {

        res.render("login");
    
}
}
module.exports = mainControllers

