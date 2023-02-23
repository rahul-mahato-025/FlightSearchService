const express = require("express");
const {
  CityController,
  AirportController,
  FlightController,
} = require("../../controllers");
const {
  validateCreateFlight,
} = require("../../middelewares/flight-middleware");

const router = express.Router();

// City APIs
router.get("/city", CityController.getAll);
router.post("/city", CityController.create);
router.delete("/city/:id", CityController.destroy);
router.patch("/city/:id", CityController.update);
router.get("/city/:id", CityController.get);

// Airport APIs
router.get("/airports/:id", AirportController.get);

// Flight APIs
router.post("/flights", validateCreateFlight, FlightController.create);
router.get("/flights/:id", FlightController.get);
router.get("/flights", FlightController.getAll);

module.exports = router;
