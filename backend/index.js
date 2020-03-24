const express = require('express');

const app = express();


app.get('/', (req, res) => {
    return res.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Leandro Ribeiro de Souza'
    });
})

app.listen(3333);