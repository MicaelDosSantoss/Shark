
const express = require('express')
const router = express.Router()
const controlar = require('../controller/controller')


router.get('/home',controlar.home)
router.get('/pagamento',controlar.pagamento)
router.get('/cadastro',controlar.cadastro)
router.get('/carrinho',controlar.carrinho)
router.get('/item',controlar.item)
router.get('/opcoes/entrega',controlar.OpcoesEntrega)


module.exports = router;