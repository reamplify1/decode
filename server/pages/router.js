const express = require('express');
const router = express.Router();
const Categories = require('../categories/categories')
const Blog = require('../blogs/blogs');
const user = require('../auth/user');
const Comment = require('../comments/comments')

// const options = require('../options/options')

//app.get = router
router.get('/', async(req, res) => {
    const options = {}
    const category = await Categories.findOne({key: req.query.category})  //??? categ
    // console.log(category);
    if(category){
        options.category = category._id
        res.locals.category = req.query.category
        // res.locals.category = req.query.categ
    }
    // console.log(options);
    let page = 0
    const limit = 3
    if(req.query.page && req.query.page > 0){
        page = req.query.page
    }
    if(req.query.search && req.query.search.length > 0){
        options.$or = [
            {
                title: new RegExp(req.query.search, 'i')
            },
            {
                description: new RegExp(req.query.search, 'i')
            }
        ]
        res.locals.search = req.query.search
    }
 
    const totalBlogs = await Blog.count(options)
    const allCategories = await Categories.find()
    // const user = await user.findById(req.params.id)
    const blogs = await Blog.find(options).limit(limit).skip(page * limit).sort({_id: -1}).populate('category').populate('user')
    res.render('index', {blogs, categories: allCategories, user: req.user ? req.user : {}, pages: Math.ceil(totalBlogs/limit)})
})

router.get('/login', (req,res) => {
    res.render('login', {user: req.user ? req.user : {}});
}) 

router.get('/registration', (req,res) => {
    // console.log(req.query);
    res.render('registration', {error: req.query.error, user: req.user ? req.user : {}});
}) ;
router.get('/new-blog', async (req,res) => {
    const allCategories = await Categories.find()
    // console.log(allCategories);
    res.render('new-blog', {categories: allCategories, user: req.user ? req.user : {}});
}) ;
router.get('/my-blog/:id', async(req,res) => { //'/my-blog/:id'
    const blogs = await Blog.find({user: req.params.id}).sort({_id: -1}).populate('category').populate('user') // получили блоги, затем отправили их на страницу
    // console.log(blogs, "blogggg");
    // console.log(req.body);
    res.render('my-blog', {user: req.user ? req.user : {}, blogs});
}) ;
router.get('/forum', (req,res) => {
    res.render('forum', {user: req.user ? req.user : {}});
}) ;
router.get('/edit-blog/:id', async(req,res) => {
    const allCategories = await Categories.find()
    const blog = await Blog.findById(req.params.id)
    res.render('edit-blog', {user: req.user ? req.user : {},  categories: allCategories, blog});
}) ;
router.get('/detail/:id', async(req,res) => {
    const comments = await Comment.find({blogId: req.params.id}).populate('authorId')
    console.log(comments);
    const allBlogs = await Blog.findOne({_id: req.params.id}).populate('category').populate('user')
    res.render('detail', {user: req.user ? req.user : {}, blogs: allBlogs, comments: comments })
})

// router.get('/new', async(req,res) => {
//     const data = await blogs.find()  
//     res.render('my-blog');
// }) ;

module.exports = router;