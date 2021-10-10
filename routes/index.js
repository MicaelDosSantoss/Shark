
const express = require('express')
const router = express.Router()
const controlar = require('../controller/controller')


router.get('/home',controlar.home)
router.get('/cadastro',controlar.cadastro)

module.exports = router;