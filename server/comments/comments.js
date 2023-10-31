const mongoose = require('mongoose')

const Schema = mongoose.Schema

const commentSchema = new mongoose.Schema({
    text: String,
    authorId: {type: Schema.Types.ObjectId, ref: 'user'},
    blogId: {type: Schema.Types.ObjectId, ref: 'blog'},
    views: {type: Number, default: 0},
    date: {
		type: Date,
		default: Date.now()
	}
    // key: Number,  ??  
})

module.exports = mongoose.model('comment', commentSchema)