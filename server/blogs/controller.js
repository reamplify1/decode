const blogs = require('./blogs');
const {upload} = require('./multer')
// const {upload} = require('./multer')
const fs = require('fs')
const path = require('path')

const createBlog = async(req, res) =>{
    // console.log(req.body);
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

const editBlog = async (req, res) =>{
    // console.log(req.params);
    if(req.file && req.body.title.length > 0 
        && req.body.description.length > 0)
    {
        const blog = await blog.findById(req.body.id)
        fs.unlinkSync(path.join(__dirname + '../../../public' + blogs.image))
        // blog.title = req.body.title
        // blog.description = req.body.description
        // blog.category = req.body.category
        // blog.image = `/images/films/${req.file.filename}`
        // blog.save()
        await blog.findByIdAndIpdate(req.body.id, {
            title: req.body.title,
            description : req.body.description,
            category : req.body.category,
            image : `/images/films/${req.file.filename}`,
        })
        res.redirect('/my-blog/' + req.user._id)
    }else{
        res.redirect(`/edit-blog/${req.body.id}?error=1`)  ///??
    }
}

module.exports = {createBlog, editBlog}

// const createBlog = async(req, res) =>{
//     console.log(req.body);

//     const newBlog = {};
//     try {
//         if(
//             req.body.title.length != 0 &&
//             req.body.description.length != 0 &&
//             req.body.category.length != 0
//         ){
//             newBlog.title = req.body.title
//             newBlog.description = req.body.description
//             newBlog.author = req.user._id
//             if(req.body.category !== 'Выберите категорию'){
//                 newBlog.category = req.body.category
//             }

//             if(req.file){
//                 newBlog.image = /img/blogs/${req.file.filename}
//             }

//             await new Blog(newBlog).save()
            
           
//             res.redirect(`/profile/${req.user._id}`)
//         }else{
//             res.redirect('/new?error=1');
//         }
//     } catch (error) {
//         console.log(error)
//         res.redirect('/new?error=1');
//     }
    
// }