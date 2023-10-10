const blogs = require('./blogs');
const {upload} = require('./multer')
// const {upload} = require('./multer')


const createBlog = async(req, res) =>{
    console.log(req.body);
    if(req.body.title.length != 0){
        await new blogs({
            title: req.body.title,
            description: req.body.description,
            category: req.body.category,
            image: `/img/blogs/${req.file.filename}`
        }).save()
        res.redirect(`/my-blog/${req.user._id}`)
    }else {
        res.redirect('/new-blog?error=1')
    }   
}

const editBlog = (req, res) =>{
    // console.log(req.params);
    if(req.file && req.body.title.length > 0 
        && req.body.description.length > 0)
    {
    }else{
        res.redirect(`/edit-blog/${req.body.id}?error=1`)  ///??
    }
}

module.exports = {createBlog, editBlog}