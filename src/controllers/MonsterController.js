const Monster = require('../models/Monster');

module.exports = {
    async store (req, res) {
        const { name } = req.body;

        const monster = await Monster.create( { name });

        return res.json(monster);

    }
};