const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  // defino el modelo
  const Activity = sequelize.define("Activity", {
    id: {
      type: DataTypes.STRING,
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
      type: DataTypes.ENUM("Verano", "Otoño", "Primavera", "Invierno"),
    },
  });
  return Activity;
};
