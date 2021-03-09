const express = require('express')
const axios = require('axios');
const bodyParser = require('body-parser')
const cors = require('cors')

const helpers = require('./helpers')

const server = express()
server.use(bodyParser.json());
server.use(cors())

server.get('/', (req, res) => {
    res.status(200).send('Welcome to gClone api')
})

const API_KEY = '92b7789841b181cdb97d77cc0c25d510';
// TODO: this route (search?:keyword)  req.params.keyword receive req from client
server.get('/search/:query', (req, res) => {
    const query = req.params.query;

    // call to Serpstack
    const url = `http://api.serpstack.com/search?access_key=${API_KEY}&type=web&query=${query}`;
    axios.get(url)
    .then(function (response) {
        // formatData(response); 
        res.status(200).send({body: helpers.formatData(response.data.organic_results, 10)})
    })
    .catch(console.warn)
})

//Feeling lucky 

server.get('/search/lucky/:query', (req, res) => {
    const query = req.params.query;

    // call to Serpstack
    const url = `http://api.serpstack.com/search?access_key=${API_KEY}&type=web&query=${query}`;
    axios.get(url)
    .then(function (response) {
        // formatData(response); 
        res.status(200).send({body: helpers.randomData(helpers.formatData(response.data.organic_results, 10))})
    })
    .catch(console.warn)
})

module.exports = server;