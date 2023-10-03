const express = require('express')
const router = express.Router()
const blogs = require('./blogs')

const {getAllBlogs} = require('./controller')

router.get('/api/new-blog', getAllBlogs)

router.post('/new-blog', async(req, res) =>{
    console.log(req.body);
    if(req.body.title.length != 0){
        await new blogs({
            title: req.body.title,
            description: req.body.description
        }).save()
        res.redirect('/my-blog')
    }else {
        res.redirect('/new-blog?error=1')
    }
    
})


// router.get('/my-blog', async(req, res) => {
//     const data = await blogs.find()
//     console.log(data);
//     res.render('my-blog', {data})
// });



module.exports = router 