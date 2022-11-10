const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

let PORT = process.env.PORT || 3000


app.listen(PORT, () => console.log('Fiesta, Carnaval en ' + PORT));

app.get('/', (req, res) => {

    res.sendFile(path.resolve('./views/index.html'));
});

app.get('/register', (req, res) => {

    res.sendFile(path.resolve('./views/register.html'));
});

app.get('/product', (req, res) => {

    res.sendFile(path.resolve('./views/productDetail.html'));
});

app.get('/carrito', (req, res) => {

    res.sendFile(path.resolve('./views/carrito.html'));
});

app.get('/tienda', (req, res) => {

    res.sendFile(path.resolve('./views/tienda.html'));
});

app.get('/login', (req, res) => {

    res.sendFile(path.resolve('./views/login.html'));
});