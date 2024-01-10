const { log } = require('console');
const Blog = require('./blogs');
const {upload} = require('./multer')
// const {upload} = require('./multer')
const fs = require('fs')
const path = require('path')

const createBlog = async(req, res) =>{
     // console.log(req.body);
    const newBlog = {};
    try{  
        if(
            req.body.title.length != 0 &&
            req.body.description.length != 0 &&
            req.body.category.length != 0
        ){  
            newBlog.title = req.body.title
            newBlog.description = req.body.description
            // newBlog.category = req.body.category
            newBlog.user = req.user._id
            if(req.body.category !== 'Выберите категорию'){
                newBlog.category = req.body.category
            }
            if(req.file){
                newBlog.image = `/img/blogs/${req.file.filename}`
            }
            await new Blog(newBlog).save()
            res.redirect(`/my-blog/${req.user._id}`)
        }else { 
            res.redirect('/new-blog?error=1')
        }   
    } catch (err){
        console.log(err);
        res.redirect('/err')
    }
    }

const editBlog = async (req, res) => {
    try{
        if(
            req.file && req.body.title.length > 0 &&
            req.body.description.length > 0 &&
            req.body.category.length != 0
        ){
            const blog = await Blog.findById(req.body.id);
            // console.log(blog);
            if(req.body.category !== 'Выберите категорию'){
                blog.category = req.body.category
            }
            if(req.file){
                fs.unlinkSync(path.join(__dirname + '../../../public' + blog.image))
                blog.image = `/img/blogs/${req.file.filename}`
            }
            blog.title = req.body.title
            blog.description = req.body.description
            blog.save()
            res.redirect('/my-blog/' + req.user._id)
        } else {
            res.redirect(`/edit-blog/${req.body.id}?error=1`)
        }
  

            // const blog = await Blog.findById(req.body.id)
            // fs.unlinkSync(path.join(__dirname + '../../../public' + blog.image))
            // //1-й способ
            // blog.title = req.body.title;   
            // blog.description = req.body.description;
            // blog.category = req.body.category;
            // blog.image = `/img/blogs/${req.file.filename}`;
            // blog.user = req.user._id 
            // blog.save()

    } catch(err) {
        console.log(err);
        res.status(400).redirect(`/edit-blog/${req.body.id}?error=2`)
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