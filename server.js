const express = require('express')
const server = express()
const bodyParser = require('body-parser')
const fetch = require('node-fetch');
const cors = require('cors')

server.use(bodyParser.json());
server.use(cors())

server.get('/', (req, res) => {
    res.status(200).send('Welcome to gclone api')
})
//TODO: this the route ('/') say hello


// TODO: this route (search?:keyword)  req.params.keyword receive req from client
server.get('/search/:query', (req, res) => {
    const query = req.params.query
    fetch('https://gclone-data.s3.eu-west-2.amazonaws.com/data.json')
    .then(res => res.json())
    .then(json => res.status(200).send(json.filter(item => item.query.q == query)[0].organic))
})
    //TODO:  request from zenzer API 


//TODO: return the query result



//TODO: format results 
// function formatData(data){
//     const data = require('./data/catsData.json');

    
    
//     console.log(data.cats.organic);


    // fetch("./data/catsData.json")
    // .then(response => {
    //    return response.json();
    // })
    // .then(data => console.log(data));
// }

// formatData();
// TODO: extract


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