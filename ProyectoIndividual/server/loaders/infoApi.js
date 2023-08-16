const axios = require("axios");
const { Country } = require("../src/db");
// const { BASE_URL } = process.env;

const infoApi = async () => {
  const getInfoCountries = await axios.get("http://localhost:5000/countries");
  const allCountries = getInfoCountries.data;

  try {
    const modelCountries = allCountries.map((item) => {
      // console.log("Current item: ",item);
      return {
        name: item.name.common,
        id: item.cca3,
        image: item.flags.png,
        continent: item.region,
        capital: item.capital,
        subregion: item.subregion,
        area: item.area,
        population: item.population,
      };
    });

    for (const item of modelCountries) {
      try {
        await Country.findOrCreate({
          where: {
            name: item.name,
            id: item.id,
            image: item.image,
            continent: item.continent,
            capital: item.capital ? item.capital.join(", ") : "",
            subregion: item.subregion ? item.subregion : "",
            area: item.area,
            population: item.population,
          },
        });
        // console.log("País agregado a la base de datos:", item.name);
      } catch (error) {
        throw Error(error.message);
      }
    }
    console.log("Todos los países agregados a la base de datos");
  } catch (error) {
    console.log("Error en la carga de los datos: ", error);
  }
};
module.exports = infoApi;
