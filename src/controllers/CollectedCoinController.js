const Collected_Coin = require('../models/Collected_Coin');
const UserService = require('../services/UserService');

module.exports = {
    async index () {

    },

    async store(req, res) {
        const { value, nickname } = req.body;
        
        const user_id = UserService.getUserIdByNickName(nickname);

        const collected_coin = await Collected_Coin.create({ value, user_id });

        return res.json(collected_coin);
    }
}