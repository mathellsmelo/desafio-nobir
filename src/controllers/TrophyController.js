const Trophy = require('../models/Trophy');
const sequelize = require('sequelize');

module.exports = {
    async search (req, res) {
        const { user_id } = req.params;

        //TODO = ESSA QUERY
        await Trophy.sequelize.query(
            `select count(t.type_id) as number_of_trophies, ty.description
            from nobir.trophies t, nobir.trophy_types ty
            where type_id = ty.id
            and t.user_id = :user_id  
            group by t.type_id`, {
                replacements: { user_id }, type: sequelize.QueryTypes.SELECT 
            }).then(result => {
                return res.json(result);
            }).catch(error => {
                return res.json('msg: ' + error);
            });
    }
};