const { Model, DataTypes } = require('sequelize');

class Collected_Coin extends Model {
    static init(sequelize) {
        super.init({ 
            value: DataTypes.INTEGER
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.User, {
            foreignKey: 'user_id',
            as: 'owner'
        });
    }

}

module.exports = Collected_Coin;