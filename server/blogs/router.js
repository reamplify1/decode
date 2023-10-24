const express = require('express')
const router = express.Router()
const Blog = require('./blogs')
const {createBlog, editBlog, deleteBlog} = require('./controller') 
const {upload} = require('./multer')
const { isAuth } = require('../auth/middleware')




router.post('/new-blog/new', isAuth, upload.single('image'), createBlog) //вызываем функцию в url    //img?
router.post('/api/blog-edit', isAuth, upload.single('image'), editBlog) 
router.delete('/api/blogs/:id', isAuth, deleteBlog)

module.exports = router 