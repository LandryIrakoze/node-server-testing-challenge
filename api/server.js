const express = require('express');

const server = express();

// const PokemonRouter = require('../entities/pokemonResources')



server.get('/', (req, res) => {
    res.status(200).json({ message: 'api up...'})
})

server.use(express.json());

module.exports = server;