const mongoose = require('mongoose')

const optionSchema = new mongoose.Schema({
	name: String,
	key: Number,

})

module.exports = mongoose.model('option', optionSchema)