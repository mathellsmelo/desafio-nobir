const Sequelize = require('sequelize');
const dbConfig = require('../config/db');

const User = require('../models/User');
const Monster = require('../models/Monster');
const Killed_Monster = require('../models/Killed_Monster');
const Death = require('../models/Death');
const Collect_Coin = require('../models/Collected_Coin');
const Trophy = require('../models/Trophy');
const Trophy_Type = require('../models/Trophy_Type');


const connection = new Sequelize(dbConfig);

User.init(connection);
Monster.init(connection);
Killed_Monster.init(connection);
Death.init(connection);
Collect_Coin.init(connection);
Trophy_Type.init(connection);
Trophy.init(connection);

User.associate(connection.models);
Monster.associate(connection.models);
Killed_Monster.associate(connection.models);
Death.associate(connection.models);
Collect_Coin.associate(connection.models);
Trophy_Type.associate(connection.models);
Trophy.associate(connection.models);

module.exports = connection;