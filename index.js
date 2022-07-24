const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');


// Servidor criado
const app = express();

// Conectamos a BD
conectarDB();
app.use(cors())

app.use(express.json());


app.use('/api/produtos', require('./routes/produto'));


// Iniciando o servidor
app.listen(4000, () => {
    console.log('Servidor rodando na porta 4000');
});
