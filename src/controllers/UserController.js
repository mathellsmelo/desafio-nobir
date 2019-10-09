const User = require('../models/User');
const UserService = require('../services/UserService');

module.exports = {
    async search (req, res) {
        const { nickname } = req.query;

        const user_id = UserService.getUserIdByNickName(nickname);

        await User.findById(user_id).then (result => {
            return res.send(result);
        }).catch(err => {
            return res.json({ error: err });
        });
    },

    async update (req, res) {
        const { coin_trophies, death_trophies, monster_trophies } = req.body;

        const user = await User.update({ coin_trophies, death_trophies, monster_trophies });

        return res.json(user);
    },

    async destroy (req, res) {

    },

    async store(req, res) {
        const { nickname } = req.body;
        console.log(nickname);
        
        await User.create({ nickname }).then (result => {
            return res.send(result);
        }).catch(err => {
            return res.send({ error: err });
        });

    }
}