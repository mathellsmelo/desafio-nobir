const express = require('express');
const routes = express.Router();

//CONTROLLERS AQUI
const MonsterController = require('./controllers/MonsterController');



//ROTAS

routes.post('/monsters', MonsterController.store);

module.exports = routes;