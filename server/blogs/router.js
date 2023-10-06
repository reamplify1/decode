const express = require('express')
const router = express.Router()
const blogs = require('./blogs')
const {createBlog} = require('./controller') 
const {upload} = require('./multer')
const { isAuth } = require('../auth/middleware')




router.post('/new-blog', isAuth, upload.single('image'), createBlog) //вызываем функцию в url    //img?


module.exports = router 