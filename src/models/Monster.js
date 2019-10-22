const { Model, DataTypes } = require('sequelize');

class Monster extends Model {
    static init(sequelize) {
        super.init({
            name:  DataTypes.STRING
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.hasMany(models.Killed_Monster, { foreignKey: 'monster_id', as: 'dead_monsters' });
    }
}

module.exports = Monster;