const Death = require('../models/Death');
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

        const death = await Death.create( { user_id, value });

        return res.json(death);
    }
};