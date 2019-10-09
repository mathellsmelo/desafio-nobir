const { Schema, model } = require('mongoose');

const CoinSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    value: {
        type: Number,
        default: 0
    }
});

module.exports = model('Collected_Coin', CoinSchema);
