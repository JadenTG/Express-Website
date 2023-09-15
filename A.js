const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send (`<h1>About US</h1> <br>
    <h2>Hello World</h2>`);
    res.status(404).send('Not Found');
});

app.listen(port);