const express = require('express');
const router = express.Router();
const categories = require('../categories/categories')

//app.get = router
router.get('/', async(req, res) => {
    const allCategories = await categories.find()
    res.render('index', {categories: allCategories})
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
router.get('/forum', (req,res) => {
    res.render('forum');
}) ;

module.exports = router;