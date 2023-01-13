const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require ("./routers/mainRouter")
const productRouter = require ('./routers/productRouter')
const userRouter = require ('./routers/userRouter')
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

app.use("/", mainRouter)
app.use ("/products/", productRouter)
app.use ("/user/", userRouter)
