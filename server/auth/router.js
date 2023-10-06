const express = require('express')
const router = express.Router()
const {signUp, signIn, signOut} = require('./controller') 
const passport = require('passport')
const {isAuth} = require('../auth/middleware')

router.post('/api/signup', signUp)
// router.post('api/signup', (req, res) =>{
//      console.log(req.body);
//      res.send('ok')
// })
                                                //метод local?  если просиходит ошибка если все ок запускаем signin
router.post('/api/signin', passport.authenticate('local', {failureRedirect : '/login?error=1'}), signIn)

router.get('/api/signout', signOut)

module.exports = router  