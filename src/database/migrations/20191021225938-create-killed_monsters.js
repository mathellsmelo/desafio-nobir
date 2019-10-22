'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('killed_monsters', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      monster_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'monsters', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      value: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
    });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('killed_monsters');
  }
};