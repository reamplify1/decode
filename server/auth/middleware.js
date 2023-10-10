const isAuth = (req,res, next) => {
    console.log(req.user);
    next()
}

module.exports = {isAuth}