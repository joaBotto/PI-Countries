const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  // defino el modelo
  const Activity = sequelize.define("Activity", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
    duration: {
      type: DataTypes.DECIMAL,
    },
    season: {
      type: DataTypes.ENUM("Summer", "Autumn", "Spring", "Winter"),
    },
  });
  return Activity;
};
