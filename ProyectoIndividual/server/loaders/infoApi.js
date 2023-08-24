const axios = require("axios");
const { Country } = require("../src/db");
// const { BASE_URL } = process.env;

const infoApi = async () => {
  try {
    const getInfoCountries = await axios.get("http://localhost:5000/countries");
    const allCountries = getInfoCountries.data;
    const modelCountries = allCountries.map((item) => {
      return {
        name: item.name.common,
        id: item.cca3,
        image: item.flags.png,
        continent: item.region,
        capital: item.capital ? item.capital : "No posee capital",
        subregion: item.subregion,
        area: item.area,
        population: item.population,
      };
    });

    await Country.bulkCreate(modelCountries)
      .then(() => {
        console.log("Todos los países agregados a la base de datos");
      })
      .catch((error) => {
        console.error("Error en la carga de algun pais", error.message);
      });
  } catch (error) {
    console.log("Error en la carga de los datos: ", error.message);
  }
};
module.exports = infoApi;
