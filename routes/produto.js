 // Rotas para produto
const express = require('express')
const router = express.Router()
const produtoController = require('../controllers/produtoController')

// api/produtos
router.post('/', produtoController.criarProduto); 
router.get('/', produtoController.obterProdutos); 
router.put('/:id', produtoController.atualizarProduto);
router.delete('/:id', produtoController.eliminarProduto);



module.exports = router;
