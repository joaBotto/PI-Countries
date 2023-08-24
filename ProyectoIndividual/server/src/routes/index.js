const { Router } = require("express");
const activityRoutes = require("../controllers/activity");
const countryRoutes = require("../controllers/country");
const router = Router();
router.use(activityRoutes);
router.use(countryRoutes);

module.exports = router;
