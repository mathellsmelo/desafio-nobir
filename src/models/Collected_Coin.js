const { Schema, model } = require('mongoose');

const CoinSchema = new Schema({
    user_id: {
        type: Schema.type.ObjectId,
        ref: 'User',
        require: true
    },
    value: {
        type: Number
    }
});

module.exports = model('Collected_Coin', CoinSchema);