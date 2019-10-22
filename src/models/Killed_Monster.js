const { Model, DataTypes  } = require('sequelize');

class Killed_Monster extends Model {
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
            as: 'killer'
        });
        this.belongsTo(models.Monster, {
            foreignKey: 'monster_id',
            as: 'dead'
        })
    }

}

module.exports = Killed_Monster;