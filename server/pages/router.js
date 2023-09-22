const express = require('express');
const router = express.Router();


//app.get = router
router.get('/', (req, res) => {
    res.render('index')
})

router.get('/login', (req,res) => {
    res.render('login');
}) 

router.get('/registration', (req,res) => {
    res.render('registration');
}) ;
router.get('/new-blog', (req,res) => {
    res.render('new-blog');
}) ;
router.get('/my-blog', (req,res) => {
    res.render('my-blog');
}) ;

module.exports = router;