"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("events", {
      event_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      available_start_time: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      end_time: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("events");
  },
};
