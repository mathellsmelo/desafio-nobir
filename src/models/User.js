const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    nickname: {
        type: String,
        required: true
    },
    coin_trophies: {
        type: Number
    },
    death_trophies: {
        type: Number
    },
    monster_trophies: {
        monster_id: {
            type: Schema.Types.ObjectId,
            ref: 'Monster'
        },
        num: {
            type: Number
        }
    }
});

module.exports = model('User', UserSchema);