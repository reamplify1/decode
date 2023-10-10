const express = require('express')
const router = express.Router()
const blogs = require('./blogs')
const {createBlog, editBlog} = require('./controller') 
const {upload} = require('./multer')
const { isAuth } = require('../auth/middleware')




router.post('/new-blog/new', isAuth, upload.single('image'), createBlog) //вызываем функцию в url    //img?
router.post('/api/blog-edit', isAuth, upload.single('image'), editBlog) 

module.exports = router 