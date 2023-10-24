const Blog = require('./blogs');
const {upload} = require('./multer')
// const {upload} = require('./multer')
const fs = require('fs')
const path = require('path')

const createBlog = async(req, res) =>{
    // console.log(req.body);
    if(req.body.title.length != 0){
        await new Blog({
            title: req.body.title,
            description: req.body.description,
            category: req.body.category,
            user: req.user.id,
            image: `/img/blogs/${req.file.filename}`
        }).save()
        res.redirect(`/my-blog/${req.user._id}`)
    }else {
        res.redirect('/new-blog?error=1')
    }   
}

// const editBlog = async (req, res) =>{
//     // console.log(req.params);
//     if( 
//         req.file && req.body.title.length > 0 &&
//         // req.file && req.body.category.length > 0 &&
//         req.body.description.length > 0
//     ){
//         // const blog = await blogs.findById(req.body.id)
//         // fs.unlinkSync(path.join(__dirname + '../../../public' + blogs.image))
//         // blog.title = req.body.title
//         // blog.description = req.body.description
//         // blog.category = req.body.category
//         // blog.image = `/images/films/${req.file.filename}`
//         // blog.save()
//         await blogs.updateOne(
//             {_id: req.body.id}, 
//             {
//                 title: req.body.title,
//                 description : req.body.description,
//                 category : req.body.category,
//                 // image : `/images/blogs/${req.file.filename}`,
//             }
//         )
//         res.status(200).redirect(`/my-blog/${req.user.id}`)
//     }else{
//         res.status(400).redirect(`/edit-blog/${req.params.id}?error=1`)  ///??
//     }
// }

// const editBlog = async (req, res) => {
//     if(req.file && req.body.title > 0 &&
//         req.body.description > 0)
//         {
//             const blog = await blogs.findById(req.body.id)
//             console.log(blog, "ssssshhhh");  ///
//         } else {
//             res.redirect(`/edit-blog/${req.body.id}?error=1`)
//         }
// }
const editBlog = async (req, res) => {
    if(req.file && req.body.title.length > 0 &&
        req.body.description.length > 0)
        {
            const blog = await Blog.findById(req.body.id)
            fs.unlinkSync(path.join(__dirname + '../../../public' + blog.image))
            //1-й способ
            blog.title = req.body.title;   
            blog.description = req.body.description;
            blog.category = req.body.category;
            blog.image = `/img/blogs/${req.file.filename}`;
            blog.user = req.user._id 
            blog.save()
            //2-й способ
            // await blogs.findByIdAndUpdate(req.body.id, {
            //     title: req.body.title,
            //     category: req.body.category,
            //     description: req.body.description,
            //     image: `img/blogs/${req.file.filename}`,
            //     user: req.user._id
            // })
            res.redirect('/my-blog/' + req.user._id)
        } else {
            res.redirect(`/edit-blog/${req.body.id}?error=1`)
        }
}

const deleteBlog = async(req, res) => {
     const blog = await Blog.findById(req.params.id)
     if(blog){
        fs.unlinkSync(path.join(__dirname + '../../../public' + blog.image))
        await Blog.deleteOne({_id: req.params.id})
        res.status(200).send('ok')
     } else {
        res.status(400).send('Not found')
     } 
}

module.exports = {createBlog, editBlog, deleteBlog}

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