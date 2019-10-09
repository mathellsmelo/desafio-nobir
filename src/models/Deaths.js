const { Schema, model } = require('mongoose');

const DeathsSchema = new Schema({
    user_id: {
        type: Schema.type.ObjectId,
        ref: 'User',
        require: true
    }    
}, {
    timestamps: true,
});

module.exports = model('Deaths', DeathsSchema);