const Collected_Coin = require('../models/Collected_Coin');
const User = require('../models/User');

module.exports = {
    async store (req, res) {
        const { user_id, value } = req.params;

        const user = await User.findByPk(user_id);
        if(!user) {
            return res.status(400).json({
                error: 'User not found'
            });
        }

        const collected_coin = await Collected_Coin.create( { user_id, value });

        return res.json(collected_coin);
    }
};