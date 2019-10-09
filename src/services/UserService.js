const User = require('../models/User');

module.exports = {

    getUserIdByNickName(nickname) {
        User.findOne({ nickname }), (err, user) => {
            if (err) throw err;
    
            return user._id;
        }
    }
}
