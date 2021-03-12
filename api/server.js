// BREAK UP THIS MONOLITHIC FILE USING ROUTES
// BREAK UP THIS MONOLITHIC FILE USING ROUTES
// BREAK UP THIS MONOLITHIC FILE USING ROUTES
const express = require('express');

const server = express();
const adopterRouter = require('./adopters/adopters-router');
const dogsRouter = require('./dogs/dogsrouter');
server.use(express.json());

server.use('/api/adopters', adopterRouter);
server.use('/api/dogs', dogsRouter);


// OTHER ENDPOINTS
// OTHER ENDPOINTS
// OTHER ENDPOINTS
server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Shelter API</h>
    <p>Welcome to the Lambda Shelter API</p>
  `);
});

module.exports = server;
