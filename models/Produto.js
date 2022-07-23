const mongoose = require('mongoose');

const ProdutoSchema = mongoose.Schema({

    nome: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    localizacao: {
        type: String,
        required: true
    },
    preco: {
        type: Number,
        required: true
    },
    dataCriacao: {
        type: Date,
        default: Date.now()
    }
});

module.exports =mongoose.model('Produto', ProdutoSchema);