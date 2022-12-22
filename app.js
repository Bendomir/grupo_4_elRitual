const express = require('express');
const app = express();
const path = require('path');
const mainRouters = require ("./routers/mainRouters")
const productRouters = require ('./routers/productRouters')
const methodOverride =  require('method-override');
const session = require ("express-session")
const cookieParser = require("cookie-parser")

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(session({secret: "secreto"}));
app.use(cookieParser());


app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

let PORT = process.env.PORT || 3000


app.listen(PORT, () => console.log('Fiesta, Carnaval en ' + PORT));

app.use("/", mainRouters)
app.use ("/product/", productRouters)
