/*exports.criarProduto =(req, res) => {
    console.log(req.body);
} */

const Produto = require("../models/Produto");


exports.criarProduto = async (req, res) => {

    try {
        let produto;

        // Criado o produto
        produto = new Produto(req.body);

        await produto.save();
        res.send(produto);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Houve um error');
    }
}

exports.obtenerProdutos = async (req, res) => {

    try {

        const produtos = await Produto.find();
        res.json(produtos)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarProduto = async (req, res) => {

    try {
        const { nome, categoria, localizacao, preco } = req.body;
        let produto = await Produto.findById(req.params.id);

        if(!produto) {
            res.status(404).json({ msg: 'O produto não existe' })
        }

        produto.nombre = nome;
        produto.categoria = categoria;
        produto.ubicacion = localizacao;
        produto.precio = preco;

        produto = await Produto.findOneAndUpdate({ _id: req.params.id },produto, { new: true} )
        res.json(produto);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Houve um error');
    }
}


exports.obtenerProduto = async (req, res) => {

    try {
        let produto = await Produto.findById(req.params.id);

        if(!produto) {
            res.status(404).json({ msg: 'O produto não existe' })
        }
       
        res.json(produto);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Houve um error');
    }
}

exports.eliminarProduto = async (req, res) => {

    try {
        let produto = await Produto.findById(req.params.id);

        if(!produto) {
            res.status(404).json({ msg: 'O produto não existe' })
        }
       
        await Produto.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Produto eliminado con exito' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}