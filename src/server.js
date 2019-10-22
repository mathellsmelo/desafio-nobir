const express = require('express');
const path = require('path');
const cors = require('cors');

const config = require('./config');

require('./database');

const app = express();
const server = require('http').createServer(app);
const routes = require('./routes');

app.use(express.static(path.join(__dirname, 'view')));
app.set('views', path.join(__dirname, 'view'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/', (req, res) => {
    res.render('index.html');
});

server.listen(
    config.port, 
    console.log('Server has started on port %s', config.port)
);