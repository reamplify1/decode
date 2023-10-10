const mongoose = require('mongoose')

const Schema = mongoose.Schema

const blogsSchema = new mongoose.Schema({
    title: String,
    description: String,
    category: {type: Schema.Types.ObjectId, ref: 'categories'},
    image: String,
    // key: Number,  ?? 
})

module.exports = mongoose.model('blog', blogsSchema)