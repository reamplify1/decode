const mongoose = require('mongoose')

const blogsSchema = new mongoose.Schema({
    title: String,
    description: String,
    // key: Number,  ?? 
})

module.exports = mongoose.model('blog', blogsSchema)