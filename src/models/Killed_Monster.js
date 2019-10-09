const { Schema, model } = require('mongoose');

const KilledMonsterSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    monster_id: {
        type: Schema.Types.ObjectId,
        ref: 'Monster',
        require: true
    }
});

module.exports = model('Killed_Monster', KilledMonsterSchema);