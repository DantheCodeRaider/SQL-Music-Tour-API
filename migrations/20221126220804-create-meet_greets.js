'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('meet_greets', {
      meet_greet_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      event_id: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
          model: 'events',
          key: 'event_id',
        }
      },
      band_id: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
          model: 'bands',
          key: 'band_id',
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('meet_greets')
  }
};