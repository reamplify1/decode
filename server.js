//express
const express = require('express');
const app = express();

//  / - автоматически переносит в папке паблик
app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded()) // расшифровка

require('./server/config/db');

//ejs, чтобы читать ejs
app.set('view engine', 'ejs');

//router
app.use(require('./server/pages/router'))
app.use(require('./server/categories/router'))

app.use(require('./server/auth/router'))
//рендер index.ejs
// app.get('/', (req, res) => {
//     res.render('index');
// });

// app.get('/login', (req,res) => {
//     res.render('login');
// }) 

// app.get('/registration', (req,res) => {
//     res.render('registration');
// }) ;
// app.get('/new-blog', (req,res) => {
//     res.render('new-blog');
// }) ;
// app.get('/my-blog', (req,res) => {
//     res.render('my-blog');
// }) ;

//server express
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})