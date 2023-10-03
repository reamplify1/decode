const express = require('express');

// подключение роутера
const router = express.Router();
// const categories = require('./categories'); //?? выносим в контроллер

const{getAllCategories} = require('./controller')

const writeDataCategory = require('./seed')

router.get('/api/categories', getAllCategories)

writeDataCategory()

//soon подключаем к серверу
module.exports = router