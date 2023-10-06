const isAuth = (req,res, next) => {
    console.log(req.user);
}

module.exports = {isAuth}