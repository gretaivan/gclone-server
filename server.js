const express = require('express')
const server = express()
const bodyParser = require('body-parser')
const fetch = require('node-fetch');
const cors = require('cors')

server.use(bodyParser.json());
server.use(cors())


//Serpstack
const axios = require('axios');

server.get('/', (req, res) => {
    res.status(200).send('Welcome to gclone api')
})
//TODO: this the route ('/') say hello


// TODO: this route (search?:keyword)  req.params.keyword receive req from client
//MODIFIED
server.get('/search/:query', (req, res) => {
    // const query = req.params.query
    // fetch('https://gclone-data.s3.eu-west-2.amazonaws.com/data.json')
    // .then(res => res.json())
    // .then(json => res.status(200).send(json.filter(item => item.query.q == query)[0].organic))

    const query = req.params.query
   // let url = "http://api.serpstack.com/search"


    // const params = {
    //     access_key: '92b7789841b181cdb97d77cc0c25d510',
    //     query: `${query}`
    //   }

    const API_KEY = '92b7789841b181cdb97d77cc0c25d510';
    let url = `http://api.serpstack.com/search?access_key=${API_KEY}&type=web&query=${query}`;

    let resArr = []
    axios.get(url)
    .then(function (response) {
        // handle success
        // console.log(response.organic_results);
        // formatData(response); 
        res.status(200).send({body: response.data.organic_results})
    })
    .catch(console.warn)
      
    //   axios.get('http://127.0.0.1:8000/serp.php', {params})
    //     .then(response => {
    //       const apiResponse = response.data;
    //       console.log("Total results: ", apiResponse.search_information.total_results);
    //       apiResponse.organic_results.map((result, number) =>
    //         console.log(`${number+1}. ${result.title}`));
    //     }).catch(error => {
    //       console.log(error);
    //     });


})
    //TODO:  request from zenzer API 


//TODO: return the query result



//TODO: format results 
function formatData(data){
//     const data = require('./data/catsData.json');
    console.log("FORMATER CALLED")
    console.log(data);
    data.organic_results.forEach(item => console.log(item))
}
    
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