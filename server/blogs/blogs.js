const mongoose = require('mongoose')

const Schema = mongoose.Schema

const blogsSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String
    // key: Number,  ?? 
})

module.exports = mongoose.model('blog', blogsSchema)