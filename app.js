const express = require('express');
const app = express();
const path = require('path');
let PORT = 3000


app.listen(PORT, () => console.log('Fiesta, Carnaval en ' + PORT));

app.get('/', (req, res) => {

    res.sendFile(path.resolve('./views/index.html'));
});


app.use(express.static('public'));