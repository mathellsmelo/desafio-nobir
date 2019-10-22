const express = require('express');
const routes = express.Router();

//CONTROLLERS AQUI
const UserController = require('./controllers/UserController');
const MonsterController = require('./controllers/MonsterController');
const KilledMonsterController = require('./controllers/KilledMonsterController');
const DeathController = require('./controllers/DeathController');
const CollectedCoinController = require('./controllers/CollectedCoinController');

//ROTAS
routes.post('/users', UserController.store);
routes.post('/monsters', MonsterController.store);
routes.post('/users/:user_id/monster/:monster_id/killed-monsters/:value', KilledMonsterController.store);
routes.post('/users/:user_id/deaths/:value', DeathController.store);
routes.post('/users/:user_id/collected-coins/:value', CollectedCoinController.store);

module.exports = routes;