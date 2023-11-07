// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

router.get('/', function (req, res) {
  res.render('calc', {
    name: 'calc',
    // component: ['heading'],

    title: 'Calculator',

    data: {
      //   test: new Test().test,
    },
  })
})

// Підключаємо роутер до бек-енду
module.exports = router
