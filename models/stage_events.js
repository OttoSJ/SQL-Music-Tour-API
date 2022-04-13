("use strict");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Stage_Events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Stage_Events.init(
    {
      stage_events_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      stage_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      event_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      stage_events__start_time: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      stage_events_end_time: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Stage_Events",
      tableName: "stage_events",
      timestamps: false,
    }
  );
  return Stage_Events;
};
