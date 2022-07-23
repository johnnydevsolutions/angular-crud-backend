 // Rotas para produto
const express = require('express')
const router = express.Router()
const produtoController = require('../controllers/produtoController')

// api/produtos
router.post('/', produtoController.criarProduto); /* () => {
    console.log('Criando produto...'); 
} ) */

module.exports = router;
