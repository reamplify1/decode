const express = require('express');
const router = express.Router();
const categories = require('../categories/categories')
const blogs = require('../blogs/blogs');
const user = require('../auth/user');

// const options = require('../options/options')

//app.get = router
router.get('/', async(req, res) => {
    const allCategories = await categories.find()
    // const user = await user.findById(req.params.id)
    // const blogs = await blogs.find().populate('categories').populate('user')
    res.render('index', {categories: allCategories, user: req.user ? req.user : {},})
})

router.get('/login', (req,res) => {
    res.render('login', {user: req.user ? req.user : {}});
}) 

router.get('/registration', (req,res) => {
    // console.log(req.query);
    res.render('registration', {error: req.query.error, user: req.user ? req.user : {}});
}) ;
router.get('/new-blog', async (req,res) => {
    const allCategories = await categories.find()
    // console.log(allCategories);
    res.render('new-blog', {categories: allCategories, user: req.user ? req.user : {}});
}) ;
router.get('/my-blog/:id', async(req,res) => { //'/my-blog/:id'
    const allBlogs = await blogs.find().populate('category').populate('user') // получили блоги, затем отправили их на страницу
    // console.log(allBlogs, "blogggg");
    // console.log(req.body);
    res.render('my-blog', {user: req.user ? req.user : {}, blogs: allBlogs, });
}) ;
router.get('/forum', (req,res) => {
    res.render('forum', {user: req.user ? req.user : {}});
}) ;
router.get('/edit-blog/:id', async(req,res) => {
    const allCategories = await categories.find()
    const blog = await blogs.findById(req.params.id)
    res.render('edit-blog', {user: req.user ? req.user : {},  categories: allCategories, blog});
}) ;

// router.get('/new', async(req,res) => {
//     const data = await blogs.find()  
//     res.render('my-blog');
// }) ;

module.exports = router;