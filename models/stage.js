"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Stage extends Model {
    static associate(models) {}
  }
  Stage.init(
    {
      stage_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      stage_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      available_start_time: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      end_time: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Stage",
      tableName: "stages",
      timestamps: false,
    }
  );
  return Stage;
};
