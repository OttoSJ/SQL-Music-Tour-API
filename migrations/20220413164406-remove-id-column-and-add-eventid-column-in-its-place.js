"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("events", "event_id", {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("events", "event_id");
  },
};
