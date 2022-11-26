'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('set_times', {
      set_time_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      start_time: {
        type: Sequelize.DATE,
        allowNull: true
      },
      end_time: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable('set_times')
  }
};