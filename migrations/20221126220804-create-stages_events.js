'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stages_events', {
      stage_event_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      event_id: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
          model: 'events',
          key: 'event_id',
        }
      },
      stage_id: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
          model: 'stages',
          key: 'stage_id',
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('stages_events')
  }
};