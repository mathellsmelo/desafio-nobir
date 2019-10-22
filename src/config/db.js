const config = require('./index');

module.exports = {
    dialect: 'mysql',
    host: config.host,
    username: config.user,
    password: config.password,
    database: config.schema,
    define: {
      timestamps: false
    },
  };