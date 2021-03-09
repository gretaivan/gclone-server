# gclone Server

## Installation & Usage

### Installation
* fork and clone this repo
* open root directory in terminal
* run ```npm install``` to install dependencies

### Usage
* ```npm start``` to launch server
* ```npm test``` to start test

## Changelog
- [x] set up express server 
- [x] general route ('/') added with welcome message
- [x] added routes for /search/:query & /search/random/:query
- [x] added cors, body-parser, axios packages
- [x] added axios functions to get data from external api
- [x] added helper functions for formatting and randomizing data

## TODO
- [ ] create review branch
- [x] create server
- [x] get request to return result to client
- [x] get request to return result from external search api
- [x] data formatters

## Test TODO 
- [ ] test server
- [ ] test get requests
- [ ] test external api calls
- [ ] test helper functions