const express = require('express');
const routes = express.Router();

//CONTROLLERS AQUI
const MonsterController = require('./controllers/MonsterController');
const UserController = require('./controllers/UserController');
const CoinController = require('./controllers/CollectedCoinController');



//ROTAS

routes.post('/monsters', MonsterController.store);
routes.post('/users', UserController.store);
routes.get('/users', UserController.search);
routes.post('/coins', CoinController.store);

module.exports = routes;