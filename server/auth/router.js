const express = require('express')
const router = express.Router()
const {signUp} = require('./controller') 


router.post('api/signup', signUp)
// router.post('api/signup', (req, res) =>{
//      console.log(req.body);
//      res.send('ok')
// })


module.exports = router  