const express = require('express');
const router = express.Router();
const pokemonDb = require('./pokemonModel')


router.get('/', (req, res) => {
    pokemonDb.get()
        .then(user => {
            res.status(200).json(user)
        })
        .catch(error => {
            res.status(400).json({ message: 'error retrieving pokemon' })
        })
})
router.get('/:id', (req, res) => {
    pokemonDb.getById(req.params.id)
        .then(item => {
            res.status(200).json(item)
        })
        .catch(error => {
            res.status(400).json({ message: 'error retrieving pokemon' })
        })
})
router.post('/', (req, res) => {
    pokemonDb.insert(req.body)
        .then(item => {
            res.status(200).json(item)
        })
        .catch(error => {
            res.status(200).json({ message: 'error adding pokemon' })
        })
})
router.put('/:id', (req, res) => {
    pokemonDb.update(req.params.id, req.body)
        .then(item => {
            res.status(200).json(item)
        })
        .catch(error=> {
            res.status(400).json({ message: 'error updating pokemon' })
        })
})
router.delete('/:id', (req, res) => {
    pokemonDb.remove(req.params.id)
        .then(item => {
            res.status(200).json(200)
        })
        .catch(item => {
            res.status(200).json({ message: 'error removing pokemon' })
        })
})

module.exports = router;