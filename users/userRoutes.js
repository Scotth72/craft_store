const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send('hello from the GET /users endpoint')
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.status(201).send(`hello from GET /users/${id} endpoint `)
});

router.post('/', (req, res) => {
    res.status(200).send(`hello from POST /users/${id} endpoint `)
});

router.delete('/:id', (req, res) => {
    res.status(201).send(`User ${id} has been deleted`)
});

router.put('/:id', (req, res) => {
    res.status(200).send(`User ${id} has been changed`)
});


module.exports = router;