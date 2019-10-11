const User = require('../models/User');
const UserService = require('../services/UserService');

module.exports = {
    async search (req, res) {
        const { nickname } = req.query;

        const user_id = UserService.getUserIdByNickName(nickname);

        await User.findById(user_id).then (result => {
            return res.send(result);
        }).catch(err => {
            return res.send({ error: err });
        });
    },

    async update (req, res) {
        const { coin_trophies, death_trophies, monster_trophies } = req.body;

        const user = await User.update({ coin_trophies, death_trophies, monster_trophies });

        return res.json(user);
    },

    async store (req, res) {
        const { nickname } = req.body;
        console.log(nickname);
        
        await User.create({ nickname }).then (result => {
            res.status(200).send(result);
        }).catch(err => {
            console.log('Erro ao tentar inserir: ' + err);
            res.status(500).send({ msg: 'Registro duplicado' });
        });

    }
}