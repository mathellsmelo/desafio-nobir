const mongoose = require('mongoose');
const config = require('./index');

const db = mongoose.connect(
    config.mongo_uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
).then(() => 
    console.log('Connect to database')
).catch((err) =>
    console.log('An Error Has Ocurred', err)
);

module.exports = db;