const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            nickname:  DataTypes.STRING
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.hasMany(models.Killed_Monster, { foreignKey: 'user_id', as: 'killers' });
        this.hasMany(models.Death, { foreignKey: 'user_id', as: 'deaths' });
        this.hasMany(models.Collected_Coin, { foreignKey: 'user_id', as: 'coins' });
        this.hasMany(models.Trophy, { foreignKey: 'user_id', as: 'trophies' });
    }
}

module.exports = User;