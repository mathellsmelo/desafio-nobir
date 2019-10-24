const express = require('express');
const path = require('path');
const cors = require('cors');

const config = require('./config');

require('./database');

const app = express();
const server = require('http').createServer(app);
const routes = require('./routes');

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(
    config.port, 
    console.log('Server has started on port %s', config.port)
);