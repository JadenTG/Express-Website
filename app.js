//Imports
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.port || 3000;

//app.engine('ejs', require('ejs')._express);
//Set views
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('./public/images'));

app.get('/', (req, res) => {
    res.render('main', {text: 'This is EJS'});
});

app.get('/about', (req, res) => {
    res.render('about', {text: 'About Page'});
});

app.get('/menu', (req, res) => {
    res.render('menu', {text: 'Menu Page'});
});

app.get('/contact', (req, res) => {
    res.render('contact', {text: 'Contact Page'});
});

app.listen(port, () => {
    console.log('Server /app is running at', port);
});
