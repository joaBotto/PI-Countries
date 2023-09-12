const express = require("express"); //importamos el modulo express
const { conn } = require("../db");
const { Activity, Country, countryWactivity } = conn.models; //instancia de conexion de sequelize
const router = express.Router();

router.get("/activities", async (_req, res, next) => {
  //Creamos una ruta HTTP de tipo 'get' utilizada para buscar todas las actividades turisticas en la base de datos
  //Ademas se incluyen los paises asociados a cada actividad utilizando el modelo 'Country' y la relacion 'through' definida en 'countryWactivity'.
  try {
    const newActivity = await Activity.findAll({
      include: [
        {
          model: Country,
          through: countryWactivity,
        },
      ],
    });
    return res.send(newActivity);
    //Respondemos con las actividades turisticas encontradas en formato json;
  } catch (error) {
    next(error);
  }
});

router.post("/activities", async (req, res, next) => {
  //Luego creamos una ruta 'post' que funcionara para crear nuevas actividades turisticas
  try {
    const { name, difficulty, duration, season, countryId } = req.body;
    const newActivity = await Activity.create({
      //Se crea una nueva ctividad turistica en la base de datos
      name,
      difficulty,
      duration,
      season,
    });
    if (countryId) await newActivity.addCountry(countryId);
    //Si se proporciona 'countryId', se relaciona la act turistica creada, con un pais, utilizando el metodo 'addCountry'.
    return res.status(201).send(newActivity);
  } catch (error) {
    next(error);
  }
});
//La ruta GET permite obtener todas las actividades con sus paises asociados, mientras que la ruta POST permite creaer una nueva actividad y asociarla opcionalmente con un pais. Cualquier error que ocurra en estas rutas, se maneja y pasa al siguiente middleware (next) para su manejo posterior.
module.exports = router;
