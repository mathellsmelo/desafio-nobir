const Sequelize = require('sequelize');
const dbConfig = require('../config/db');

const User = require('../models/User');
const Monster = require('../models/Monster');
const Killed_Monster = require('../models/Killed_Monster');
const Death = require('../models/Death');
const Collect_Coin = require('../models/Collected_Coin');


const connection = new Sequelize(dbConfig);

User.init(connection);
Monster.init(connection);
Killed_Monster.init(connection);
Death.init(connection);
Collect_Coin.init(connection);

User.associate(connection.models);
Monster.associate(connection.models);
Killed_Monster.associate(connection.models);
Death.associate(connection.models);
Collect_Coin.associate(connection.models);

module.exports = connection;