"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("stage_events", {
      stage_events_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      stage_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      event_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      stage_events_start_time: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      stage_events_end_time: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("stage_events");
  },
};
