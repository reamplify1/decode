const express = require('express');

// подключение роутера
const router = express.Router();

const Genres = require('./Genres');

router.get('/api/genres', async(req, res) => {
    const data = await Genres.find()
    res.send({data})
})
//soon подключаем к серверу
module.exports = router