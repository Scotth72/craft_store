const express = require('express');
const PORT = 5000;

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('Hello World, from Express!');
});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});