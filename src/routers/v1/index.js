const express = require("express");
const { CityController, AirportController } = require("../../controllers");

const router = express.Router();

// City APIs
router.get("/city", CityController.getAll);
router.post("/city", CityController.create);
router.delete("/city/:id", CityController.destroy);
router.patch("/city/:id", CityController.update);
router.get("/city/:id", CityController.get);

// Airport APIs
router.get("/airports/:id", AirportController.get);

module.exports = router;
