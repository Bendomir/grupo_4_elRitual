const path = require('path');
const mainControllers={
    index:(req, res) => {

        res.render("index");
    },
    register: (req, res) => {

        res.render("register");
    },
    productDetail: (req, res) => {

        res.render("productDetail", {"product": products});
    },

    productDetailAdmin: (req, res) => {

        res.render("productDetailAdmin", {"product": products});
    },
    carrito: (req, res) => {

        res.render("carrito");
    },
    tienda: (req, res) => {

        res.render("tienda", {"product": products});
    },
    login: (req, res) => {

        res.render("login");
    
}
}
module.exports = mainControllers


let products = [
    {
    id: "1",
    name: "Remera AC/DC",
    images: "/images/remera-ACDC.jpg",
    price: 4200
    },
    {
    id: "2",
    name: "Remera Nirvana",
    images: "/images/remera-nirvana.jpg",
    price: 4200
    },
    {
    id: "3",
    name: "Remera Soda Stereo",
    images: "/images/remera-soda-stereo.jpg",
    price: 4200
    },
    {
    id: "4",
    name: "Remera AC/DC",
    images: "/images/remera.jpg",
    price: 4200
    }
]
