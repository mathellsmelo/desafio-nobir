const Monster = require('../models/Monster');

module.exports = {
    async store(req, res) {
        const { name } = req.body;
        console.log(name);
        
        const monster = await Monster.create({ name });

        return res.json(monster);
    }
}