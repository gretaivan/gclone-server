const express = require('express')
const server = express()
const bodyParser = require('body-parser')

server.use(bodyParser.json());

server.get('/', (req, res) => {
    res.status(200).send('Welcome to gclone api')
})

// server.get('/poll?:query', (req, res) => {
//     res.status(200).send('top 10 responses as json')
// })

// server.get('/poll/lucky?:query', (req, res) => {
//     res.status(200).send('link to random response')
// })

module.exports = server;