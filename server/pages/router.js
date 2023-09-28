const express = require('express');
const router = express.Router();
const categories = require('../categories/categories')

//app.get = router
router.get('/', async(req, res) => {
    const allCategories = await categories.find()
    res.render('index', {categories: allCategories, user: req.user ? req.user : {}})
})

router.get('/login', (req,res) => {
    res.render('login', {user: req.user ? req.user : {}});
}) 

router.get('/registration', (req,res) => {
    // console.log(req.query);
    res.render('registration', {error: req.query.error, user: req.user ? req.user : {}});
}) ;
router.get('/new-blog', (req,res) => {
    res.render('new-blog', {user: req.user ? req.user : {}});
}) ;
router.get('/my-blog/:id', (req,res) => {
    // console.log(req.user);
    res.render('my-blog', {user: req.user ? req.user : {}});
}) ;
router.get('/forum', (req,res) => {
    res.render('forum', {user: req.user ? req.user : {}});
}) ;

module.exports = router;