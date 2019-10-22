const { Model, DataTypes } = require('sequelize');

class Death extends Model {
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
            as: 'dead'
        });
    }
}

module.exports = Death;