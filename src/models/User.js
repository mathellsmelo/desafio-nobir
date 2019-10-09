const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    nickname: {
        type: String,
        required: true
    }
});

module.exports = model('User', UserSchema);