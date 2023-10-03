const blogs = require('./blogs');

const getAllBlogs = async(req, res) => {
    const data = await blogs.find()
    res.send({data})
}

module.exports = {getAllBlogs}