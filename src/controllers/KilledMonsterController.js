const Killed_Monster = require('../models/Killed_Monster');
const User = require('../models/User');
const Monster = require('../models/Monster');

module.exports = {
    async store (req, res) {
        const { user_id, monster_id, value } = req.params;

        const user = await User.findByPk(user_id);
        if(!user) {
            return res.status(400).json({
                error: 'User not found'
            });
        }

        const monster = await Monster.findByPk(monster_id);
        if(!monster) {
            return res.status(400).json({
                error: 'Monster not found'
            });
        }

        const killed_Monster = await Killed_Monster.create( { user_id, monster_id, value });

        return res.json(killed_Monster);
    }
};