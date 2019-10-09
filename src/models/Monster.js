const { Schema, model } = require('mongoose');

const MonsterSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = model('Monster', MonsterSchema);