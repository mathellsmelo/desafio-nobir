const Collected_Coin = require('../models/Collected_Coin');
const UserService = require('../services/UserService');

module.exports = {
    async index () {

    },

    async store(req, res) {
        const { value, nickname } = req.body;
        
        console.log(value + nickname);

        const user_id = UserService.getUserIdByNickName(nickname);

        console.log(user_id);

        const collected_coin = await Collected_Coin.create({ value, user_id });

        return res.json(collected_coin);
    }
}