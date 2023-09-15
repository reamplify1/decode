//express
const express = require('express');
const app = express();

//  / - автоматически переносит в папке паблик
app.use(express.static(__dirname + '/public'));


//ejs, чтобы читать ejs
app.set('view engine', 'ejs');


//рендер index.ejs
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/login', (req,res) => {
    res.render('login');
})

//server express
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})