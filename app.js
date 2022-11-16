const express = require('express');
const app = express();
const path = require('path');
const mainRouters = require ("./routers/mainRouters")

app.use(express.static('public'));

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

let PORT = process.env.PORT || 3000


app.listen(PORT, () => console.log('Fiesta, Carnaval en ' + PORT));

app.use("/", mainRouters)

