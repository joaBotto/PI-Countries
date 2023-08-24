const { Router } = require("express");
const { conn } = require("../db");
const { Country, Activity } = conn.models;
const { Op } = require("sequelize");
const router = Router();

// router.get("/", (req, res, next) => {
//   try {
//      if (req.query.name) {
//       return Country.findAll({
//         attributes: [
//           "flag",
//           "name",
//           "continent",
//           "id",
//           "population",
//           "capital",
//           "subregion",
//           "area",
//         ],
//         where: {
//           name: {
//             [Op.iLike]: `%${req.query.name}%`,
//           },
//         },
//         include: { model: Activity },
//       }).then((country) => {
//         if (country.length === 0) {
//           return res.status(404).send({ message: "No countries found" });
//         }
//         return res.status(200).json(country);
//       });
//     } else {
//       return Country.findAll({
//         attributes: [
//           "flag",
//           "name",
//           "continent",
//           "id",
//           "population",
//           "capital",
//           "subregion",
//           "area",
//         ],
//         include: { model: Activity },
//       }).then((country) => {
//         return res.status(200).send(country);
//       });
//     }
//   } catch (error) {
//     next(error);
//   }
// });

router.get("/countries", async (req, res) => {
  try {
    const allCountries = await Country.findAll();
    if (allCountries) {
      return res.status(200).json(allCountries);
    } else {
      throw new Error();
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/countries/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const country = await Country.findOne({
      where: {
        id: id,
      },
      include: { model: Activity },
    });
    if (country) {
      return res.status(200).json(country);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.get("/countries/name", async (req, res, next) => {
  try {
    const { name } = req.query;
    const countries = await Country.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      include: { model: Activity },
    });
    if (countries.length === 0) {
      return res.status(404).json({ message: "No countries found" });
    }
    return res.status(200).json(countries);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
module.exports = router;
