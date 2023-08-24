const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  // defino el modelo
  const Country = sequelize.define("Country", {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      validate: {
        len: [2, 10],
        isAlpha: true,
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.INTEGER,
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return Country;
};
