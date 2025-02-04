"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Set_Time extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Set_Time.init(
    {
      set_time_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      stage_id: {
        type: DataTypes.SMALLINT,
        allowNull: false,
      },
      event_id: {
        type: DataTypes.SMALLINT,
        allowNull: false,
      },
      band_id: {
        type: DataTypes.SMALLINT,
        allowNull: false,
      },
      start_time: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      end_time: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Set_Time",
      tableName: "set_time",
      timestamps: false,
    }
  );
  return Set_Time;
};
