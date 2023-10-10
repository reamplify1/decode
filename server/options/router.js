const express = require('express')
const router = express.Router()
const {getAllOptions} = require('./controller')
const writeDataOption = require('./seed')

router.get('api/option', getAllOptions)

writeDataOption()


module.exports = router 