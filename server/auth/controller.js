const user = require('./user')
const bcrypt = require('bcrypt')

const signUp = async(req, res) => {
if(
    req.body.email.length > 0 &&
    req.body.full_name.length > 0 &&
    req.body.password.length > 0 &&
    req.body.re_password.length > 0
){
    const findUser = await user.findOne({email: req.body.email}).count()
    console.log(findUser);
    if(findUser){
        res.redirect('/register?error=3');
    }else if(req.body.password !== req.body.re_password){
        res.redirect('/register?error=2');
    }else{
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(req.body.password, salt, function(err, hash) {
                new user({
                    email: req.body.email,
                    full_name: req.body.full_name,
                    password: hash
                }).save();
                res.redirect('/login')
            });
        })
    }

}else{
    res.redirect('/register?error=1');
}
}
module.exports = {
        signUp
}


// 1 - проблема с пустыми полями
// if(
//     req.body.email.length <= 0 && 
//     req.body.full_name.length <= 0 &&
//     req.body.password.length <= 0 &&
//     req.body.re_password.length <= 0
// ){
//     res.redirect('/registration?error=1')
//     } else if( req.body.password !==  req.body.re_password){
//         res.redirect('/registration?error=2') 
//     }   
//     const findUser = await user.findOne({email: req.body.email}).count()
//     console.log(findUser);
//     if(findUser){
//         res.redirect('/registration?error=3')
//     }
//     bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(req.body.password, salt, function(err, hash) {
//             new user ({
//                 email:  req.body.email,
//                 full_name: req.body.full_name,
//                 password: hash
//             }).save()
//             res.redirect('/login')
//         });
//     })

// 1.1
// if(
//     req.body.email.length > 0 &&
//     req.body.full_name.length > 0 &&
//     req.body.password.length > 0 &&
//     req.body.re_password.length > 0
// ){
//     const findUser = await User.findOne({email: req.body.email}).count()
//     console.log(findUser);
//     if(findUser){
//         res.redirect('/register?error=3');
//     }else if(req.body.password !== req.body.re_password){
//         res.redirect('/register?error=2');
//     }else{
//         bcrypt.genSalt(10, (err, salt) => {
//             bcrypt.hash(req.body.password, salt, function(err, hash) {
//                 new User({
//                     email: req.body.email,
//                     full_name: req.body.full_name,
//                     password: hash
//                 }).save();
//                 res.redirect('/login')
//             });
//         })
//     }

// }else{
//     res.redirect('/register?error=1');
// }

//2 способ 
// const Categories = require('./Categories');
// const data = [
//     'Прогнозы в IT',
//     'Веб-разработка',
//     'Мобильная разработка',
//     'Фриланс',
//     'Разработка игр',
//     'Дизайн и юзабилити',
//     'Искуственный интеллект',
//     'Машинное обучение',
//     'Алгоритмы',
//     'Тестирование IT систем'
// ];

// async function writeDataCategory() {
//     const length = await Categories.countDocuments();

//     if (length === 0) {
//         for (let index = 0; index < data.length; index++) {
//             const item = data[index];
//             await new Categories({
//                 name: item,
//                 key: index
//             }).save();
//         }
//         console.log('Данные сохранены в базу данных.');
//     } else {
//         console.log('Данные уже существуют в базе данных. Ничего не сохранено.');
//     }
// }

// module.exports = writeDataCategory;

// // Вызовите функцию для сохранения данных
// writeDataCategory();