"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("set_times", {
      set_times_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      stage_id: {
        type: Sequelize.SMALLINT,
        allowNull: false,
      },
      event_id: {
        type: Sequelize.SMALLINT,
        allowNull: false,
      },
      band_id: {
        type: Sequelize.SMALLINT,
        allowNull: false,
      },
      start_time: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      end_time: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("set_times");
  },
};
