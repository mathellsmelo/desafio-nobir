const { Model, DataTypes } = require('sequelize');

class Trophy extends Model {
    static init(sequelize) {
        super.init({
            level:  DataTypes.INTEGER
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.Trophy_Type, {
            foreignKey: 'type_id',
            as: 'type'
        });
        this.belongsTo(models.User, {
            foreignKey: 'user_id',
            as: 'owner'
        });
    }
}

module.exports = Trophy;