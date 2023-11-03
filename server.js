//express
const express = require('express');
const app = express();
const mongooseStore = require('connect-mongo')
const session = require('express-session')
const passport = require('passport')
//  / - автоматически переносит в папке паблик //все статичные файлы
app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded()) // расшифровка
app.use(express.json()) // расшифровка

app.use(session({
    name: 'decode.session',       //название сессии
    secret: 'keyboard cat',      // секретный ключ
    maxAge: 1000 * 60 * 60 * 7,  // длительность сессии
    resave: false,
    store: mongooseStore.create ({
        mongoUrl: 'mongodb://127.0.0.1:27017'
    })
}))

app.use(passport.initialize())
app.use(passport.session())

require('./server/config/db');
require('./server/config/passport')
//ejs, чтобы читать ejs
app.set('view engine', 'ejs');

//router
app.use(require('./server/pages/router'))
app.use(require('./server/categories/router'))

app.use(require('./server/auth/router'))

app.use(require('./server/blogs/router'))
app.use(require('./server/comments/router'))




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