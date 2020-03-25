const express = require('express');
const crypto = require('crypto')
const connection = require('./database/connection');

const routes = express.Router();

routes.post('/ongs', async (req, res) => {
    const {name, email, whatsapp, city, uf} = req.body;

    let id = crypto.randomBytes(2).toString('HEX');

    id = `${name}-${id}`

    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf
    })

    return res.json({id});



})

module.exports = routes;