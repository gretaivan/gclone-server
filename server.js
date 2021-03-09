const express = require('express')
const server = express()
const bodyParser = require('body-parser')

server.use(bodyParser.json());

server.get('/', (req, res) => {
    res.status(200).send('Welcome to gclone api')
})
//TODO: this the route ('/') say hello


// TODO: this route (search?:keyword)  req.params.keyword receive req from client

    //TODO:  request from zenzer API 


//TODO: return the query result


//TODO: format results 


//TODO: extract


//TODO: Feeling lucky 

// server.get('/poll/lucky?:query', (req, res) => {
//     res.status(200).send('link to random response')
// })


    //reuse req from client


    //reuse request from zenzer


    //reuse generate random index 0 - 9 


    // redirect user in randomIndex result



//TODO generate random index 0 - 9 



//TODO get from zenzer by keyword  
//server.get('/poll?:query', (req, res) => {
//     res.status(200).send('top 10 responses as json')
// })






module.exports = server;