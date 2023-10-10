const options = require('./options')

const getAllOptions = async(req, res) => {
	const data = await options.find();
	console.log(data);
	res.send({data})
}

module.exports = {getAllOptions}