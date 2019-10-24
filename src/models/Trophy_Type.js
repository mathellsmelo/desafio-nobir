const { Model, DataTypes } = require('sequelize');

class Trophy_Type extends Model {
    static init(sequelize) {
        super.init({
            description:  DataTypes.STRING
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.hasMany(models.Trophy, { foreignKey: 'type_id', as: 'type' });
    }
}

module.exports = Trophy_Type;