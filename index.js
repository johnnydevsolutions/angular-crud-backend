const express = require('express');
const conectarDB = require('./config/db');

// Servidor criado
const app = express();

// Conectamos a la BD
conectarDB();

app.use(express.json());

app.use('/api/produtos', require('./routes/produto'));

// Definindo a rota principal
 app.get('/', (req, res) => {
    res.send('Hello World');
}); 



// Iniciando o servidor
app.listen(4000, () => {
    console.log('Servidor rodando na porta 4000');
});
