const Monster = require('../models/Monster');
const Trophy_Type = require('../models/Trophy_Type');

module.exports = {
    async store (req, res) {
        const { name } = req.body;

        const monster = await Monster.create( { name });

        await Trophy_Type.create( { description: monster.name } );

        return res.json(monster);

    },

    async index (req, res) {

        const monster = await Monster.findAll();

        return res.json(monster);
    }
};