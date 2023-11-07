// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

// Підключіть файли роутів
const test = require('./test')
const calc = require('./calc')

// Об'єднайте файли роутів за потреби
// router.use('/', test)
router.use('/', calc)

// Експортуємо глобальний роутер
module.exports = router
