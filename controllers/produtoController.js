const Produto = require("../models/Produto");

exports.criarProduto = async (req,res) => {

    try {
        let produto;

        // Criando produto
        produto = new Produto(req.body);

       await produto.save();
       res.send(produto);

    } catch (error) {
        console.log(error);
        res.status(500).send('Houve um error');
    }
}

exports.obterProdutos = async (req,res) => {
    
        try {
            const produtos = await Produto.find();
            res.json(produtos);
        } catch (error) {
            console.log(error);
            res.status(500).send('Houve um error');
        }
    }

    exports.atualizarProduto = async (req,res) => {
            
            try {
               const { nome, categoria, localizacao, preco } = req.body;
                let produto = await Produto.findById(req.params.id);

                if(!produto) {
                    res.status(404).json({msg: 'Produto não encontrado'});
                }

                produto.nome = nome;
                produto.categoria = categoria;
                produto.localizacao = localizacao;
                produto.preco = preco;

                produto = await Produto.findOneAndUpdate({_id: req.params.id},produto,{new: true});
                res.json(produto);

            } catch (error) {
                console.log(error);
                res.status(500).send('Houve um error');
            }
        }
    exports.eliminarProduto = async (req,res) => {
                
                try {
                    const produto = await Produto.findById(req.params.id);
    
                    if(!produto) {
                        res.status(404).json({msg: 'Produto não existe'});
                    }
    
                    await Produto.findOneAndDelete({_id: req.params.id});
                    res.json({msg: 'Produto deletado'});
    
                } catch (error) {
                    console.log(error);
                    res.status(500).send('Houve um error');
                }
            }