const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, './public/img/blogs')
    },
    filename: function(req, file, callback){
        let extention = file.originalname.split('.')
        extention = extention[extention.length -1]
        const unique = Date.now() + '.' + extention
        callback(null, unique)
    }
})

const upload = multer({storage})

module.exports = {upload}