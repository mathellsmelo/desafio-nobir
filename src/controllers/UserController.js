const User = require('../models/User');

module.exports = {
    async store (req, res) {
        const { nickname } = req.body;

        const user = await User.create( { nickname });

        return res.json(user);
    },

    async search (req, res) {
        const { nickname } = req.params;

        const user = await User.findOrCreate({ where: { nickname } });

        return res.json(user);
    }

    
};