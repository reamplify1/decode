const mongoose = require('mongoose')

const Schema = mongoose.Schema

const blogsSchema = new mongoose.Schema({
    title: String,
    description: String,
    category: {type: Schema.Types.ObjectId, ref: 'category'},
    user: {type: Schema.Types.ObjectId, ref: 'user'},
    image: String,
    views: {type: Number, default: 0},
    date: {type: Date, default: Date.now}
    // key: Number,  ?? 
})

module.exports = mongoose.model('blog', blogsSchema)