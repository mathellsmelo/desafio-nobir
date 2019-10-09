const User = require('../models/User');

module.exports = {
    async index (req, res) {

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
        
        const user = await User.create({ nickname });

        return res.json(user);
    }
}